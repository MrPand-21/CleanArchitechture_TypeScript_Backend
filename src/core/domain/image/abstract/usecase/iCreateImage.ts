import { ImageType } from "../../../../common/enums";

export interface ICreateImage {

    title?: string;
    type: ImageType;
    parentId: string;
    imageUrl: string;

}