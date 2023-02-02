import { UseCase } from '../../../common/usecase/useCase';
import { IGetImage } from '../abstract/usecase/IGetImage';
import { ImageUseCaseDTO } from './dto/ImageUseCaseDTO';

export interface GetImageUseCase extends UseCase<IGetImage, ImageUseCaseDTO> { }