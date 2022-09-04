import { Result } from './../../../common/response/result';
import { Exception } from './../../../common/response/Exception';
import { CoreAssert } from './../../../common/utils/assert';
import { Optional } from "../../../common/commonTypes";
import { GetImagePreviewQuery } from "../../../common/cqers/queries/image/getImagePreviewQuery";
import { GetImagePreviewQueryResult } from "../../../common/cqers/queries/image/results/getImagePreviewQuery";
import { IGalleryRepository } from "../../../domain/image/abstract/persistance/iGalleryRepository";
import { GetImagePreviewQueryHandler } from "../../../domain/image/handler/getImagePreviewQueryHandler";

export class HandleGetImagePreviewQueryService implements GetImagePreviewQueryHandler {

    /**
     * @param {IGalleryRepository} iGalleryRepository is a repository for gallery images which is used to get image preview data from database on this document
     */
    constructor(
        private readonly iGalleryRepository: IGalleryRepository
    ) { }

    public async handle(query: GetImagePreviewQuery): Promise<Optional<GetImagePreviewQueryResult>> {
        let queryResult: Optional<GetImagePreviewQueryResult>;

        const image = await this.iGalleryRepository.findImage(query.by, query.options);

        if (image) {
            queryResult = GetImagePreviewQueryResult.new(image.getId(), image.getType(), image.getImageUrl());
        }

        return queryResult;
    }
}