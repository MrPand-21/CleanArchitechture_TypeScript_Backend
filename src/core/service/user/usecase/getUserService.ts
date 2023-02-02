import { UserUseCaseDto } from './../../../domain/user/usecase/dto/userUseCaseDTO';
import { Optional } from "../../../common/commonTypes";
import { IUserRepository } from "../../../domain/user/abstract/persistance/IUserRepository";
import { IGetUser } from "../../../domain/user/abstract/usecase/IGetUser";
import { GetUserUseCase } from "../../../domain/user/usecase/GetUserUseCase";
import { User } from '../../../domain/user/entity/user';
import { Exception } from '../../../common/response/Exception';
import { Result } from '../../../common/response/Result';

export class GetUserService implements GetUserUseCase {

    /**
     * @param {IUserRepository} userRepository which is used to access the user repository and perform operations on it
     */
    constructor(
        private readonly userRepository: IUserRepository
    ) { }

    async execute(payload: IGetUser): Promise<UserUseCaseDto> {
        const user: Optional<User> = await this.userRepository.findUser({ id: payload?.userId });
        if (!user) {
            throw Exception.new({ resultDescription: Result.ENTITY_NOT_FOUND_ERROR, overrideMessage: "User not found" });
        }

        return UserUseCaseDto.newFromUser(user);
    }
}