import { UserHandler } from './../../core/service/handler/UserHandler';
import { TypeOrmUserRepositoryAdapter } from './../../infra/adapter/persistence/typeorm/repository/TypeOrmUserRepositoryAdapter';
import { Module, Provider } from '@nestjs/common';
import { UserController } from '../api/controller/UserController';
import { DITokens } from '@core/DITokens';
import { UserService } from '@core/service/service/UserService';


const persistenceProviders: Provider[] = [
    {
        provide: DITokens.UserDITokens.UserRepository,
        useClass: TypeOrmUserRepositoryAdapter
    }
];

@Module({
    controllers: [
        UserController
    ],
    providers: [
        ...persistenceProviders,
        UserService,
        UserHandler
    ],
    exports: [
        ...persistenceProviders,
        DITokens.UserDITokens.UserRepository,
    ]
})
export class UserModule { }