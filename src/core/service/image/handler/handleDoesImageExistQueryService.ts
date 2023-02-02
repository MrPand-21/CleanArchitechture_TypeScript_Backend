import { CoreAssert } from './../../../common/utils/assert';
import { Image } from './../../../domain/image/entity/image';
import { IGalleryRepository } from '../../../domain/image/abstract/persistance/IGalleryRepository';
import { Optional } from '../../../common/commonTypes';
import { DoesImageExistQuery } from '../../../common/cqers/queries/image/doesImageExistQuery';
import { DoesImageExistQueryResult } from '../../../common/cqers/queries/image/results/doesImageExistQueryResult';
import { DoesImageExistQueryHandler } from './../../../domain/image/handler/doesImageExistQueryHandler';
export class HandleDoesImageExistQueryService implements DoesImageExistQueryHandler {

    /**
     *
     */
    constructor(
        private readonly iGalleryRepository: IGalleryRepository
    ) {
    }


    public async handle(payload: DoesImageExistQuery): Promise<Optional<DoesImageExistQueryResult>> {
        const doesImageExist: boolean = !! await this.iGalleryRepository.countImages(payload.by, payload.options);
        return DoesImageExistQueryResult.new(doesImageExist);
    }

}