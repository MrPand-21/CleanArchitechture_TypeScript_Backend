import { ImageType } from './../../common/enums';

export type ImageEntityPayload = {

    id?: string;
    title?: string,
    parentId: string,
    type: number,
    imageUrl: string,
    createdAt?: Date

};