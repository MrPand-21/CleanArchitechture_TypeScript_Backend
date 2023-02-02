import { Result } from '../../../common/response/Result';
import { Exception } from '../../../common/response/Exception';
import { CoreAssert } from '../../../common/utils/assert';
import { IGalleryRepository } from "../../../domain/image/abstract/persistance/IGalleryRepository";
import { IRemoveImage } from "../../../domain/image/abstract/usecase/IRemoveImage";
import { RemoveImageUseCase } from '../../../domain/image/usecase/removeImageUseCase';

export class RemoveImageService implements RemoveImageUseCase {

    /**
     * @param {IGalleryRepository} galleryRepository, the gallery repository which is used to remove the image
     */
    constructor(
        private readonly iGalleryRepository: IGalleryRepository
    ) { }

    onCommit?: ((result: void, port: IRemoveImage) => Promise<void>) | undefined;

    onRollback?: ((error: Error, port: IRemoveImage) => Promise<void>) | undefined;

    public async execute(payload: IRemoveImage): Promise<void> {
        const { imageId } = payload;
        const doesImageExist: boolean = !! await this.iGalleryRepository.countImages({ id: imageId });
        CoreAssert.isFalse(doesImageExist, Exception.new({ resultDescription: Result.WRONG_CREDENTIALS_ERROR, overrideMessage: "Image you've selected has already deleted", data: imageId }));

        return await this.iGalleryRepository.removeImage(imageId);

        //event bus can be used to publish the event that image has been deleted
    }

}
