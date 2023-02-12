import { DITokens } from '@core/DITokens';
import { TypeOrmImage } from '@infra/adapter/persistence/typeorm/entity/TypeOrmImage';
import { TypeOrmUser } from '@infra/adapter/persistence/typeorm/entity/TypeOrmUser';
import { Module } from '@nestjs/common';
import { AppDataSource } from 'data-source';
import { DataSource } from 'typeorm';

export const databaseProviders = [
    {
        provide: DITokens.CoreDITokens.DataSource,
        useFactory: async () => {
            const dataSource = new DataSource({
                type: "mysql",
                host: "localhost",
                port: 3306,
                username: "root",
                password: "Ardaalper21",
                database: "turix",
                logging: true,
                entities: [
                    TypeOrmImage,
                    TypeOrmUser
                ],
                synchronize: true,
            });

            return dataSource.initialize();
        }
    }
];

@Module({
    providers: [...databaseProviders],
    exports: [...databaseProviders]
})
export class DataBaseModule { }