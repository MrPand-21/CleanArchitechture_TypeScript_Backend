import { Result } from './../../../common/response/result';
import { Exception } from './../../../common/response/Exception';
import { CoreAssert } from "../../../common/utils/assert";
import { IUserRepository } from "../../../domain/user/abstract/persistance/IUserRepository";
import { ICreateUser } from "../../../domain/user/abstract/usecase/ICreateUser";
import { User } from "../../../domain/user/entity/user";
import { CreateUserUseCase } from "../../../domain/user/usecase/CreateUserUseCase";
import { UserUseCaseDto } from "../../../domain/user/usecase/dto/userUseCaseDTO";

export class CreateUserService implements CreateUserUseCase {
    constructor(
        private readonly userRepository: IUserRepository
    ) { }

    public async execute(payload: ICreateUser): Promise<UserUseCaseDto> {

        const doesUserExist: boolean = !! await this.userRepository.countUsers({ email: payload.email });
        CoreAssert.isFalse(doesUserExist, Exception.new({ resultDescription: Result.ENTITY_ALREADY_EXISTS_ERROR, overrideMessage: 'User already exists' }));

        const user: User = await User.new({
            firstName: payload.firstName,
            lastName: payload.lastName,
            email: payload.email,
            role: payload.role,
            birthDate: payload.birthDate,
            passwordHash: payload.passwordHash
        })

        await this.userRepository.addUser(user);

        return UserUseCaseDto.newFromUser(user);

    }
}