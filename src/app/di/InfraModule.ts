import { AppDataSource } from './../../../data-source';
import { ApiServerConfig } from '../../infra/config/ApiServerConfig';
import { Global, Module, OnApplicationBootstrap, Provider } from '@nestjs/common';
import { APP_FILTER, APP_INTERCEPTOR } from '@nestjs/core';
import { CqrsModule } from '@nestjs/cqrs';
import { initializeTransactionalContext } from 'typeorm-transactional-cls-hooked';
import { DITokens } from '../../core/DITokens';
import { NestCommandBusAdapter } from '../../infra/cqers/NestCommandBusAdapter';
import { NestEventBusAdapter } from '../../infra/cqers/NestEventBusAdapter';
import { NestQueryBusAdapter } from '../../infra/cqers/NestQueryBusAdapter';
import { NestHttpExceptionFilter } from '../api/NestHttpExceptionFilter';
import { NestHttpLoggingInterceptor } from '../api/NestHttpLoggingInterceptor';

const providers: Provider[] = [
    {
        provide: APP_FILTER,
        useClass: NestHttpExceptionFilter,
    },
    {
        provide: DITokens.CoreDITokens.CommandBus,
        useClass: NestCommandBusAdapter,
    },
    {
        provide: DITokens.CoreDITokens.QueryBus,
        useClass: NestQueryBusAdapter,
    },
    {
        provide: DITokens.CoreDITokens.EventBus,
        useClass: NestEventBusAdapter,
    }
];

export const databaseProviders = [
    {
        provide: DITokens.CoreDITokens.DataSource,
        useFactory: async () => {
            return AppDataSource.initialize();
        }
    }
];

if (ApiServerConfig.LOG_ENABLE) {
    providers.push({
        provide: APP_INTERCEPTOR,
        useClass: NestHttpLoggingInterceptor,
    });
}

@Global()
@Module({
    imports: [
        CqrsModule,
    ],
    providers: [
        ...providers,
        ...databaseProviders
    ],
    exports: [
        DITokens.CoreDITokens.CommandBus,
        DITokens.CoreDITokens.QueryBus,
        DITokens.CoreDITokens.EventBus,
        ...databaseProviders
    ]
})
export class InfraModule implements OnApplicationBootstrap {
    onApplicationBootstrap(): void {
        initializeTransactionalContext();
    }
}