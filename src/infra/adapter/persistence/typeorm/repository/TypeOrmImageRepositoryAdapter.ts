import { Nullable } from './../../../../../core/common/commonTypes';
import { EntityRepository, InsertResult, Repository, SelectQueryBuilder, UpdateQueryBuilder } from 'typeorm';
import { Optional } from '../../../../../core/common/commonTypes';
import { RepositoryFindOptions, RepositoryRemoveOptions, RepositoryUpdateManyOptions } from '../../../../../core/common/persistance/RepositoryOptions';
import { IGalleryRepository } from '../../../../../core/domain/image/abstract/persistance/IGalleryRepository';
import { Image } from '../../../../../core/domain/image/entity/image';
import { TypeOrmImage } from '../entity/TypeOrmImage';
import { TypeOrmImageMapper } from '../entity/mapper/TypeOrmImageMapper';

export class TypeOrmImageRepositoryAdapter extends Repository<TypeOrmImage> implements IGalleryRepository {

    private readonly imageAlias: string = 'image';

    public async findImage(by: { id?: string }, options: RepositoryFindOptions = {}): Promise<Optional<Image>> {
        let domainEntity: Optional<Image>;

        const query: SelectQueryBuilder<TypeOrmImage> = this.buildImageQueryBuilder();

        this.extendQueryWithByProperties(by, query);

        const ormEntity: Nullable<Optional<TypeOrmImage>> = await query.getOne();

        if (ormEntity) {
            domainEntity = TypeOrmImageMapper.toDomainEntity(ormEntity);
        }

        return domainEntity;
    }

    public async findImages(by: { id?: string, parentId?: string }, options: RepositoryFindOptions = {}): Promise<Image[]> {
        const query: SelectQueryBuilder<TypeOrmImage> = this.buildImageQueryBuilder();

        this.extendQueryWithByProperties(by, query);

        if (options.limit) {
            query.limit(options.limit);
        }
        if (options.offset) {
            query.limit(options.offset);
        }

        const ormImages: TypeOrmImage[] = await query.getMany();
        const domainImages: Image[] = TypeOrmImageMapper.toDomainEntities(ormImages);

        return domainImages;
    }

    countImages(by: { id?: string | undefined; parentId?: string | undefined; }, options?: RepositoryFindOptions | undefined): Promise<number> {
        const query: SelectQueryBuilder<TypeOrmImage> = this.buildImageQueryBuilder();

        this.extendQueryWithByProperties(by, query);

        return query.getCount();
    }

    public async addImage(image: Image): Promise<{ id: string }> {
        const ormImage: TypeOrmImage = TypeOrmImageMapper.toOrmEntity(image);

        const insertResult: InsertResult = await this
            .createQueryBuilder(this.imageAlias)
            .insert()
            .into(TypeOrmImage)
            .values([ormImage])
            .execute();

        return {
            id: insertResult.identifiers[0].id
        };
    }

    public async updateImage(image: Image): Promise<void> {
        const ormImage: TypeOrmImage = TypeOrmImageMapper.toOrmEntity(image);
        await this.update(ormImage.id, ormImage);
    }

    public async updateImages(images: Image[], options: RepositoryUpdateManyOptions = {}): Promise<void> {
        images.map(async (image: Image) => {
            await this.updateImage(image);
        });
    }

    public async removeImage(imageId: string, options: RepositoryRemoveOptions = {}): Promise<void> {

        //TODO: soft delete

        await this.delete(imageId);

    }

    private buildImageQueryBuilder(): SelectQueryBuilder<TypeOrmImage> {
        return this
            .createQueryBuilder(this.imageAlias)
            .select();
    }

    private extendQueryWithByProperties(by: { id?: string, parentId?: string }, query: SelectQueryBuilder<TypeOrmImage>): void {
        if (by.id) {
            query.andWhere(`"${this.imageAlias}"."id" = :id`, { id: by.id });
        }
        if (by.parentId) {
            query.andWhere(`"${this.imageAlias}"."parentId" = :parentId`, { parentId: by.parentId });
        }
    }

}