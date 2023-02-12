import { ImageType } from "../../../../common/utils/Enums";

export interface ICreateImageDTO {

    title?: string;
    type: number;
    parentId: string;
    imageUrl: string;

}