import { TransactionalUseCase } from '../../../common/usecase/transactionalUseCase';
import { ICreateImage } from "../abstract/usecase/ICreateImage";
import { ImageUseCaseDTO } from './dto/ImageUseCaseDTO';

export interface CreateImageUseCase extends TransactionalUseCase<ICreateImage, ImageUseCaseDTO> { }