import { Optional } from "@core/common/utils/CommonTypes";
import { Exception } from "@core/common/response/Exception";
import { Result } from "@core/common/response/Result";
import { CoreAssert } from "@core/common/utils/CoreAssert";
import { IGalleryRepository } from "@core/domain/image/abstract/IGalleryRepository";
import { ICreateImage } from "@core/domain/image/abstract/DTOs/ICreateImageDTO";
import { IGetImage } from "@core/domain/image/abstract/DTOs/IGetImageDTO";
import { Image } from "@core/domain/image/entity/Image";
import { ImageDITokens } from "@core/domain/image/imageDITokens";
import { ImageUseCaseDTO } from "@core/domain/image/entity/ImageUseCaseDTO";
import { Inject } from "@nestjs/common";

export class ImageService {

    /**
     * @param {IGalleryRepository} iGalleryRepository
     */
    constructor(
        @Inject(ImageDITokens.ImageRepository)
        private readonly iGalleryRepository: IGalleryRepository
    ) { }

    public async getImage(payload: IGetImage): Promise<ImageUseCaseDTO> {
        const image: Optional<Image> = await this.iGalleryRepository.findImage({ id: payload.imageId });
        CoreAssert.notEmpty(image, Exception.new({ resultDescription: Result.ENTITY_NOT_FOUND_ERROR, overrideMessage: "Image not found" }));

        return ImageUseCaseDTO.newFromImage(image!);
    }

    public async createImage(payload: ICreateImage): Promise<ImageUseCaseDTO> {
        const image: Image = await Image.new({
            title: payload.title,
            type: payload.type,
            parentId: payload.parentId,
            imageUrl: payload.imageUrl
        })

        await this.iGalleryRepository.addImage(image);

        return ImageUseCaseDTO.newFromImage(image);
    }

}