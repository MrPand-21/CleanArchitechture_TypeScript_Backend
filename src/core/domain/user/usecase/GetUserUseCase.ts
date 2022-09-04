import { UseCase } from "../../../common/usecase/useCase";
import { IGetUser } from "../abstract/usecase/IGetUser";
import { UserUseCaseDto } from "./dto/userUseCaseDTO";

export interface GetUserUseCase extends UseCase<IGetUser, UserUseCaseDto> { }