import { UseCase } from '../../../common/usecase/useCase';
import { IGetImages } from '../abstract/usecase/IGetImages';
import { ImageUseCaseDTO } from './dto/ImageUseCaseDTO';

export interface GetImagesUseCase extends UseCase<IGetImages, ImageUseCaseDTO[]> { }