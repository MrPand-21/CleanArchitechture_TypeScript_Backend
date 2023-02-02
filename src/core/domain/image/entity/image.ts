import { IsDate, IsEnum, IsNumber, IsOptional, IsString } from "class-validator";
import { Entity } from "../../../common/entity/entity";
import { ImageEntityPayload } from "../types";

export class Image extends Entity<string> {

    @IsString()
    private title: string;

    @IsNumber()
    private parentId: string;

    @IsNumber()
    private type: number;

    @IsString()
    private imageUrl: string;

    @IsDate()
    private readonly createdAt: Date;

    constructor(payload: ImageEntityPayload) {
        super();

        this.id = payload.id || undefined;
        this.title = payload.title!;
        this.parentId = payload.parentId;
        this.type = payload.type;
        this.imageUrl = payload.imageUrl;
        this.createdAt = payload.createdAt || new Date();
    }

    public getTitle(): string {
        return this.title;
    }

    public getParentId(): string {
        return this.parentId;
    }

    public getType(): number {
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