import { ImageType } from "../../../../enums";

export class GetImagePreviewQueryResult {

    public readonly id: string;

    public readonly type: number;

    public readonly relativePath: string;

    constructor(id: string, type: number, relativePath: string) {
        this.id = id;
        this.type = type;
        this.relativePath = relativePath;
    }

    public static new(id: string, type: number, relativePath: string): GetImagePreviewQueryResult {
        return new GetImagePreviewQueryResult(id, type, relativePath);
    }

}