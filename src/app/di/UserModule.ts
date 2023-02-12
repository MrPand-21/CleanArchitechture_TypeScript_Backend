import { UserHandler } from './../../core/service/handler/UserHandler';
import { TypeOrmUserRepositoryAdapter } from './../../infra/adapter/persistence/typeorm/repository/TypeOrmUserRepositoryAdapter';
import { Module, Provider } from '@nestjs/common';
import { UserController } from '../api/controller/UserController';
import { TypeOrmUser } from '../../infra/adapter/persistence/typeorm/entity/TypeOrmUser';
import { DITokens } from '@core/DITokens';
import { DataSource } from 'typeorm';
import { DataBaseModule } from './DatabaseModule';
import { UserService } from '@core/service/service/UserService';


const persistenceProviders: Provider[] = [
    {
        provide: DITokens.UserDITokens.UserRepository,
        useFactory: (dataSource: DataSource) => dataSource.getRepository(TypeOrmUser).extend(TypeOrmUserRepositoryAdapter),
        inject: [DITokens.CoreDITokens.DataSource]
    }
];

@Module({
    imports: [
        DataBaseModule
    ],
    controllers: [
        UserController
    ],
    providers: [
        ...persistenceProviders,
        UserService,
        UserHandler
    ],
    exports: [
        DITokens.UserDITokens.UserRepository,
        ...persistenceProviders
    ]
})
export class UserModule { }