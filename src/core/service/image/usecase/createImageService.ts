import { IGalleryRepository } from "../../../domain/image/abstract/persistance/iGalleryRepository";
import { ICreateImage } from "../../../domain/image/abstract/usecase/iCreateImage";
import { Image } from "../../../domain/image/entity/image";
import { CreateImageUseCase } from "../../../domain/image/usecase/createImageUseCase";
import { ImageUseCaseDTO } from "../../../domain/image/usecase/dto/imageUseCaseDTO";

export class CreateImageService implements CreateImageUseCase {

    /**
     * @param {iGalleryRepository} iGalleryRepository is a repository for gallery which is a collection of images 
     */
    constructor(
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