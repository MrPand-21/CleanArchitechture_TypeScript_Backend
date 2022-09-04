import { ImageType } from './../../common/enums';

export type ImageEntityPayload = {

    title?: string,
    parentId: string,
    type: ImageType,
    imageUrl: string,
    createdAt?: Date

};