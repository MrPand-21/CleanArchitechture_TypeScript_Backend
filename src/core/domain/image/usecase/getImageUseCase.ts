import { IGetImage } from './../abstract/usecase/iGetImage';
import { UseCase } from './../../../common/usecase/UseCase';
import { ImageUseCaseDTO } from './dto/imageUseCaseDTO';

export interface GetImageUseCase extends UseCase<IGetImage, ImageUseCaseDTO> { }