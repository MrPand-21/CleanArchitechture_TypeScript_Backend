import { ImageDITokens } from './../../../domain/image/imageDITokens';
import { Inject, Injectable } from "@nestjs/common";
import { IGalleryRepository } from "../../../domain/image/abstract/persistance/IGalleryRepository";
import { ICreateImage } from "../../../domain/image/abstract/usecase/ICreateImage";
import { Image } from "../../../domain/image/entity/image";
import { CreateImageUseCase } from "../../../domain/image/usecase/createImageUseCase";
import { ImageUseCaseDTO } from "../../../domain/image/usecase/dto/ImageUseCaseDTO";

@Injectable()
export class CreateImageService implements CreateImageUseCase {

    /**
     * @param {iGalleryRepository} iGalleryRepository is a repository for gallery which is a collection of images 
     */
    constructor(
        @Inject(ImageDITokens.ImageRepository)
        private readonly iGalleryRepository: IGalleryRepository
    ) { }

    public async execute(payload: ICreateImage): Promise<ImageUseCaseDTO> {
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