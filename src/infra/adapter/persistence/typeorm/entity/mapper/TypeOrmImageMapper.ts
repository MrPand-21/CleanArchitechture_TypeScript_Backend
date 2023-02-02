import { Image } from "../../../../../../core/domain/image/entity/image";
import { TypeOrmImage } from "../TypeOrmImage";

export class TypeOrmImageMapper {

    public static toOrmEntity(domainImage: Image): TypeOrmImage {
        const ormImage: TypeOrmImage = new TypeOrmImage();

        ormImage.id = domainImage.getId();
        ormImage.parentId = domainImage.getParentId();
        ormImage.title = domainImage.getTitle();
        ormImage.createdAt = domainImage.getCreatedAt();
        ormImage.type = domainImage.getType();
        ormImage.imageUrl = domainImage.getImageUrl();

        return ormImage;
    }

    public static toOrmEntities(domainImages: Image[]): TypeOrmImage[] {
        return domainImages.map(domainImage => this.toOrmEntity(domainImage));
    }

    public static toDomainEntity(ormImage: TypeOrmImage): Image {
        const domainImage: Image = new Image({
            id: ormImage.id,
            parentId: ormImage.parentId,
            title: ormImage.title,
            type: ormImage.type,
            createdAt: ormImage.createdAt,
            imageUrl: ormImage.imageUrl,
        });

        return domainImage;
    }

    public static toDomainEntities(ormImages: TypeOrmImage[]): Image[] {
        return ormImages.map(ormImage => this.toDomainEntity(ormImage));
    }

}