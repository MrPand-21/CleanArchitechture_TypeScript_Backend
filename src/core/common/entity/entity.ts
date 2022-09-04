import { Result } from '../response/result';
import { ClassValidationDetails, Optional } from "../commonTypes";
import { Exception } from "../response/Exception";
import { ClassValidator } from '../utils/classValidator';

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

}