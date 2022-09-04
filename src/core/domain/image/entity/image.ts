import { IsDate, IsEnum, IsNumber, IsOptional, IsString } from "class-validator";
import { Nullable } from "../../../common/commonTypes";
import { Entity } from "../../../common/entity/entity";
import { ImageType } from "../../../common/enums";
import { ImageEntityPayload } from "../types";

export class Image extends Entity<string> {

    @IsString()
    private title: string;

    @IsNumber()
    private parentId: number;

    @IsEnum(ImageType)
    private type: ImageType;

    @IsString()
    private imageUrl: string;

    @IsDate()
    private readonly createdAt: Date;

    constructor(payload: ImageEntityPayload) {
        super();

        this.title = payload.title;
        this.parentId = payload.parentId;
        this.type = payload.type;
        this.imageUrl = payload.imageUrl;
        this.createdAt = payload.createdAt || new Date();
    }

    public getTitle(): string {
        return this.title;
    }

    public getParentId(): number {
        return this.parentId;
    }

    public getType(): ImageType {
        return this.type;
    }

    public getImageUrl(): string {
        return this.imageUrl;
    }

    public getCreatedAt(): Date {
        return this.createdAt;
    }

    public static async new(payload: ImageEntityPayload): Promise<Image> {
        const image: Image = new Image(payload);
        return image;
    }
}