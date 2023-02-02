import { Result } from '../response/Result';
import { ClassValidationDetails, Optional } from "../commonTypes";
import { Exception } from "../response/Exception";
import { ClassValidator } from "../utils/classValidator";

export class UseCaseValidatableAdapter {

    public async validate(): Promise<void> {
        const details: Optional<ClassValidationDetails> = await ClassValidator.validate(this);
        if (details) {
            throw Exception.new({ resultDescription: Result.USE_CASE_PORT_VALIDATION_ERROR, data: details });
        }
    }

}