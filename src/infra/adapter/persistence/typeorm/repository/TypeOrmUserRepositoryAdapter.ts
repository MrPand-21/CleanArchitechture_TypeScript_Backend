
import { Injectable } from '@nestjs/common';
import { InsertResult, SelectQueryBuilder } from 'typeorm';
import { BaseRepository } from 'typeorm-transactional-cls-hooked';
import { Nullable, Optional } from '../../../../../core/common/commonTypes';
import { RepositoryFindOptions } from '../../../../../core/common/persistance/RepositoryOptions';
import { IUserRepository } from '../../../../../core/domain/user/abstract/persistance/IUserRepository';
import { User } from '../../../../../core/domain/user/entity/user';
import { TypeOrmUserMapper } from '../entity/mapper/TypeOrmUserMapper';
import { TypeOrmUser } from '../entity/TypeOrmUser';

@Injectable()
export class TypeOrmUserRepositoryAdapter extends BaseRepository<TypeOrmUser> implements IUserRepository {

    private readonly userAlias: string = 'user';

    public async findUser(by: { id?: string, email?: string }, options: RepositoryFindOptions = {}): Promise<Optional<User>> {
        let domainEntity: Optional<User>;

        const query: SelectQueryBuilder<TypeOrmUser> = this.buildUserQueryBuilder();

        this.extendQueryWithByProperties(by, query);


        const ormEntity: Nullable<Optional<TypeOrmUser>> = await query.getOne();

        if (ormEntity) {
            domainEntity = TypeOrmUserMapper.toDomainEntity(ormEntity);
        }

        return domainEntity;
    }

    public async countUsers(by: { id?: string, email?: string }, options: RepositoryFindOptions = {}): Promise<number> {
        const query: SelectQueryBuilder<TypeOrmUser> = this.buildUserQueryBuilder();

        this.extendQueryWithByProperties(by, query);


        return query.getCount();
    }

    public async addUser(user: User): Promise<{ id: string }> {
        const ormUser: TypeOrmUser = TypeOrmUserMapper.toOrmEntity(user);

        const insertResult: InsertResult = await this
            .createQueryBuilder(this.userAlias)
            .insert()
            .into(TypeOrmUser)
            .values([ormUser])
            .execute();

        return {
            id: insertResult.identifiers[0].id
        };
    }

    public async updateUser(user: User): Promise<void> {
        const ormUser: TypeOrmUser = TypeOrmUserMapper.toOrmEntity(user);
        await this.update(ormUser.id, ormUser);
    }

    private buildUserQueryBuilder(): SelectQueryBuilder<TypeOrmUser> {
        return this
            .createQueryBuilder(this.userAlias)
            .select();
    }

    private extendQueryWithByProperties(by: { id?: string, email?: string }, query: SelectQueryBuilder<TypeOrmUser>): void {
        if (by.id) {
            query.andWhere(`"${this.userAlias}"."id" = :id`, { id: by.id });
        }
        if (by.email) {
            query.andWhere(`"${this.userAlias}"."email" = :email`, { email: by.email });
        }
    }

}