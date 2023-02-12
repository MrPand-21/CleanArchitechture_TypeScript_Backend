import { ImageType } from '../../common/utils/Enums';

export type ImageEntityPayload = {

    id?: string;
    title?: string,
    parentId: string,
    type: number,
    imageUrl: string,
    createdAt?: Date

};