import { ImageType } from '@core/common/utils/Enums';
import { Exclude, Expose, plainToInstance } from 'class-transformer';
import { IsOptional, isString } from 'class-validator';
import { Image } from './image';

@Exclude()
export class ImageUseCaseDTO {

    @Expose()
    id!: string;

    @Expose()
    title?: string;

    @Expose()
    type!: ImageType;

    @Expose()
    parentId!: string;

    @Expose()
    imageUrl!: string;

    @Expose()
    createdAt!: Date;

    public static newFromImage(image: Image): ImageUseCaseDTO {
        return plainToInstance(ImageUseCaseDTO, image);
    }

    public static newListFromImages(images: Image[]): ImageUseCaseDTO[] {
        return images.map(image => this.newFromImage(image));
    }
}