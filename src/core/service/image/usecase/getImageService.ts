import { Result } from '../../../common/response/Result';
import { Exception } from '../../../common/response/Exception';
import { CoreAssert } from '../../../common/utils/assert';
import { Optional } from '../../../common/commonTypes';
import { Image } from '../../../domain/image/entity/image';
import { IGalleryRepository } from '../../../domain/image/abstract/persistance/IGalleryRepository';
import { IGetImage } from "../../../domain/image/abstract/usecase/IGetImage";
import { ImageUseCaseDTO } from "../../../domain/image/usecase/dto/ImageUseCaseDTO";
import { GetImageUseCase } from '../../../domain/image/usecase/getImageUseCase';

export class GetImageService implements GetImageUseCase {

    /**
     *
     */
    constructor(
        private readonly iGalleryRepository: IGalleryRepository
    ) {
    }

    public async execute(payload: IGetImage): Promise<ImageUseCaseDTO> {
        const image: Optional<Image> = await this.iGalleryRepository.findImage({ id: payload.imageId });
        CoreAssert.notEmpty(image, Exception.new({ resultDescription: Result.ENTITY_NOT_FOUND_ERROR, overrideMessage: "Image not found" }));

        return ImageUseCaseDTO.newFromImage(image!);
    }

}