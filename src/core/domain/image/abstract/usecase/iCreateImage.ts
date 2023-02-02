import { ImageType } from "../../../../common/enums";

export interface ICreateImage {

    title?: string;
    type: number;
    parentId: string;
    imageUrl: string;

}