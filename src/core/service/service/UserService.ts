import { Optional } from "@core/common/utils/CommonTypes";
import { Exception } from "@core/common/response/Exception";
import { Result } from "@core/common/response/Result";
import { CoreAssert } from "@core/common/utils/CoreAssert";
import { IUserRepository } from "@core/domain/user/abstract/IUserRepository";
import { ICreateUser } from "@core/domain/user/abstract/DTOs/ICreateUserDTO";
import { IGetUser } from "@core/domain/user/abstract/DTOs/IGetUserDTO";
import { User } from "@core/domain/user/entity/User";
import { UserUseCaseDto } from "@core/domain/user/entity/UserUseCaseDTO";

export class UserService {

    /**
     * @param {IUserRepository} userRepository which is used to access the user repository and perform operations on it
     */
    constructor(
        private readonly userRepository: IUserRepository
    ) { }

    async getUser(payload: IGetUser): Promise<UserUseCaseDto> {
        const user: Optional<User> = await this.userRepository.findUser({ id: payload?.userId });
        if (!user) {
            throw Exception.new({ resultDescription: Result.ENTITY_NOT_FOUND_ERROR, overrideMessage: "User not found" });
        }

        return UserUseCaseDto.newFromUser(user);
    }

    public async createUser(payload: ICreateUser): Promise<UserUseCaseDto> {

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
