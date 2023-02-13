import { TypeOrmImage } from "@infra/adapter/persistence/typeorm/entity/TypeOrmImage";
import { TypeOrmUser } from "@infra/adapter/persistence/typeorm/entity/TypeOrmUser";
import { DatabaseConfig } from "@infra/config/DatabaseConfig";
import "reflect-metadata"
import { DataSource } from "typeorm";

export const AppDataSource = new DataSource({

    type: DatabaseConfig.TYPE as any,
    host: DatabaseConfig.HOST,
    port: DatabaseConfig.PORT,
    username: DatabaseConfig.USERNAME,
    password: DatabaseConfig.PASSWORD,
    database: DatabaseConfig.NAME,
    logging: DatabaseConfig.LOG_ENABLE,
    synchronize: DatabaseConfig.IS_SYNCHRONIZE,
    entities: [
        TypeOrmImage,
        TypeOrmUser
    ],
    migrations: [],
    subscribers: [],

});