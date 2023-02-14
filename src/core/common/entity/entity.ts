import { Result } from '../response/Result';
import { ClassValidationDetails, Optional } from "../utils/CommonTypes";
import { Exception } from "../response/Exception";
import { ClassValidator } from '../persistance/ClassValidator';
import { randomUUID } from 'crypto';

export class Entity<TIdentifier extends string | number> {

    protected id: Optional<TIdentifier>;

    public getId(): TIdentifier {
        if (typeof this.id === 'undefined') {
            throw Exception.new({ resultDescription: Result.ENTITY_VALIDATION_ERROR, overrideMessage: `${this.constructor.name}: ID is empty.` });
        }

        return this.id;
    }

    public async validate(): Promise<void> {
        const details: Optional<ClassValidationDetails> = await ClassValidator.validate(this);
        if (details) {
            throw Exception.new({ resultDescription: Result.ENTITY_VALIDATION_ERROR, data: details });
        }
    }

    static generateId(): string {
        return Math.random().toString(36).substring(2, 15) + randomUUID() + Math.random().toString(36).substring(2, 15);
    }

}