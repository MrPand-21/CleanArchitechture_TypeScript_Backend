import { IGetImages } from './../abstract/usecase/iGetImages';
import { UseCase } from './../../../common/usecase/UseCase';
import { ImageUseCaseDTO } from './dto/imageUseCaseDTO';

export interface GetImagesUseCase extends UseCase<IGetImages, ImageUseCaseDTO[]> { }