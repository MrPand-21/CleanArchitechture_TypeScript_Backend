import { UseCase } from "../../../common/usecase/UseCase";
import { ICreateUser } from "../abstract/usecase/ICreateUser";
import { UserUseCaseDto } from "./dto/userUseCaseDTO";

export interface CreateUserUseCase extends UseCase<ICreateUser, UserUseCaseDto> { }