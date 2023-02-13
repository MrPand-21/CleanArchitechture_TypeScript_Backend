import { Optional } from "@core/common/utils/CommonTypes";
import { Exception } from "@core/common/response/Exception";
import { Result } from "@core/common/response/Result";
import { CoreAssert } from "@core/common/utils/CoreAssert";
import { IGalleryRepository } from "@core/domain/image/abstract/IGalleryRepository";
import { Image } from "@core/domain/image/entity/Image";
import { ImageUseCaseDTO } from "@core/domain/image/entity/ImageUseCaseDTO";
import { Inject, Injectable } from "@nestjs/common";
import { DITokens } from "@core/DITokens";
import { IGetImageDTO } from "@core/domain/image/abstract/DTOs/IGetImageDTO";
import { ICreateImageDTO } from "@core/domain/image/abstract/DTOs/ICreateImageDTO";
import { IGetImagesDTO } from "@core/domain/image/abstract/DTOs/IGetImagesDTO";
import { IRemoveImageDTO } from "@core/domain/image/abstract/DTOs/IRemoveImageDTO";

@Injectable()
export class ImageService {

    /**
     * @param {IGalleryRepository} iGalleryRepository
     */
    constructor(
        @Inject(DITokens.ImageDITokens.ImageRepository)
        private readonly iGalleryRepository: IGalleryRepository
    ) { }

    public async getImage(payload: IGetImageDTO): Promise<ImageUseCaseDTO> {
        const image: Optional<Image> = await this.iGalleryRepository.findImage({ id: payload.imageId });
        CoreAssert.notEmpty(image, Exception.new({ resultDescription: Result.ENTITY_NOT_FOUND_ERROR, overrideMessage: "Image not found" }));

        return ImageUseCaseDTO.newFromImage(image!);
    }

    public async createImage(payload: ICreateImageDTO): Promise<ImageUseCaseDTO> {
        const image: Image = await Image.new({
            title: payload.title,
            type: payload.type,
            parentId: payload.parentId,
            imageUrl: payload.imageUrl
        })

        await this.iGalleryRepository.addImage(image);

        return ImageUseCaseDTO.newFromImage(image);
    }

    public async getImages(payload: IGetImagesDTO): Promise<ImageUseCaseDTO[]> {
        const images: Image[] = await this.iGalleryRepository.findImages();

        CoreAssert.notEmpty(images, Exception.new({ resultDescription: Result.ENTITY_NOT_FOUND_ERROR, overrideMessage: "No images found" }));

        return ImageUseCaseDTO.newListFromImages(images);
    }

    public async removeImage(payload: IRemoveImageDTO): Promise<void> {

        const { imageId } = payload;
        const doesImageExist: boolean = !! await this.iGalleryRepository.countImages({ id: imageId });
        CoreAssert.isFalse(doesImageExist, Exception.new({ resultDescription: Result.WRONG_CREDENTIALS_ERROR, overrideMessage: "Image you've selected has already deleted", data: imageId }));

        return await this.iGalleryRepository.removeImage(imageId);
        //event bus can be used to publish the event that image has been deleted
    }

}