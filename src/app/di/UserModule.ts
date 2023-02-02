import { TypeOrmUserRepositoryAdapter } from './../../infra/adapter/persistence/typeorm/repository/TypeOrmUserRepositoryAdapter';
import { Module, Provider } from '@nestjs/common';
import { DataSource, SelectQueryBuilder } from 'typeorm';
import { UserDITokens } from '../../core/domain/user/userDITokens';
import { HandleGetUserQueryService } from '../../core/service/user/handler/HandleGetUserQueryService';
import { CreateUserService } from '../../core/service/user/usecase/createUserService';
import { GetUserService } from '../../core/service/user/usecase/getUserService';
import { NestWrapperGetUserQueryHandler } from '../../infra/handler/NestWrapperGetUserQueryHandler';
import { UserController } from '../api/controller/UserController';
import { TypeOrmUser } from '../../infra/adapter/persistence/typeorm/entity/TypeOrmUser';


const persistenceProviders: Provider[] = [
    {
        provide: UserDITokens.UserRepository,
        useFactory: dataSource => dataSource.getRepository(TypeOrmUser).extend(TypeOrmUserRepositoryAdapter),
        inject: [DataSource]
    }
];

const useCaseProviders: Provider[] = [
    {
        provide: UserDITokens.CreateUserUseCase,
        useFactory: (userRepository) => new CreateUserService(userRepository),
        inject: [UserDITokens.UserRepository]
    },
    {
        provide: UserDITokens.GetUserUseCase,
        useFactory: (userRepository) => new GetUserService(userRepository),
        inject: [UserDITokens.UserRepository]
    }
];

const handlerProviders: Provider[] = [
    NestWrapperGetUserQueryHandler,
    {
        provide: UserDITokens.GetUserQueryHandler,
        useFactory: (userRepository) => new HandleGetUserQueryService(userRepository),
        inject: [UserDITokens.UserRepository]
    }
];

@Module({
    controllers: [
        UserController
    ],
    providers: [
        ...persistenceProviders,
        ...useCaseProviders,
        ...handlerProviders,
    ],
    exports: [
        UserDITokens.UserRepository,
        ...persistenceProviders
    ]
})
export class UserModule { }