import { TypeOrmImage } from "@infra/adapter/persistence/typeorm/entity/TypeOrmImage";
import { TypeOrmUser } from "@infra/adapter/persistence/typeorm/entity/TypeOrmUser";
import "reflect-metadata"
import { DataSource } from "typeorm";

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "Ardaalper21",
    database: "turix",
    synchronize: true,
    logging: true,
    entities: [
        TypeOrmImage,
        TypeOrmUser
    ],
    migrations: [],
    subscribers: [],
})
