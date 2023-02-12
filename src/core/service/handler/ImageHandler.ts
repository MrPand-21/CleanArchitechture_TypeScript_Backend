import { Optional } from "@core/common/utils/CommonTypes";
import { DoesImageExistQuery } from "@core/common/cqers/queries/DoesImageExistQuery";
import { GetImagePreviewQuery } from "@core/common/cqers/queries/GetImagePreviewQuery";
import { DoesImageExistQueryResult } from "@core/common/cqers/results/DoesImageExistQueryResult";
import { GetImagePreviewQueryResult } from "@core/common/cqers/results/GetImagePreviewQueryResult";
import { IGalleryRepository } from "@core/domain/image/abstract/IGalleryRepository";

export class ImageHandler {

    /**
     * @param {IGalleryRepository} iGalleryRepository is a repository for gallery images which is used to get image preview data from database on this document
     */
    constructor(
        private readonly iGalleryRepository: IGalleryRepository
    ) { }

    public async handleGetImagePreview(query: GetImagePreviewQuery): Promise<Optional<GetImagePreviewQueryResult>> {
        let queryResult: Optional<GetImagePreviewQueryResult>;

        const image = await this.iGalleryRepository.findImage(query.by, query.options);

        if (image) {
            queryResult = GetImagePreviewQueryResult.new(image.getId(), image.getType(), image.getImageUrl());
        }

        return queryResult;
    }


    public async handleDoesImageExist(payload: DoesImageExistQuery): Promise<Optional<DoesImageExistQueryResult>> {
        const doesImageExist: boolean = !! await this.iGalleryRepository.countImages(payload.by, payload.options);
        return DoesImageExistQueryResult.new(doesImageExist);
    }
}