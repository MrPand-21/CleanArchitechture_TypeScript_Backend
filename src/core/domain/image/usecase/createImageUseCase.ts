import { TransactionalUseCase } from './../../../common/usecase/transactionalUseCase';
import { ICreateImage } from "../abstract/usecase/iCreateImage";
import { ImageUseCaseDTO } from "./dto/imageUseCaseDTO";

export interface CreateImageUseCase extends TransactionalUseCase<ICreateImage, ImageUseCaseDTO> { }