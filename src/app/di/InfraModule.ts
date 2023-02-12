import { ApiServerConfig } from '../../infra/config/ApiServerConfig';
import { DatabaseConfig } from '../../infra/config/DatabaseConfig';
import { Global, Module, OnApplicationBootstrap, Provider } from '@nestjs/common';
import { APP_FILTER, APP_INTERCEPTOR } from '@nestjs/core';
import { CqrsModule } from '@nestjs/cqrs';
import { TypeOrmModule } from '@nestjs/typeorm';
import { initializeTransactionalContext } from 'typeorm-transactional-cls-hooked';
import { DITokens } from '../../core/DITokens';
import { NestCommandBusAdapter } from '../../infra/cqers/NestCommandBusAdapter';
import { NestEventBusAdapter } from '../../infra/cqers/NestEventBusAdapter';
import { NestQueryBusAdapter } from '../../infra/cqers/NestQueryBusAdapter';
import { TypeOrmDirectory } from '../../infra/adapter/persistence/typeorm/TypeOrmDirectory';
import { TypeOrmLogger } from '../../infra/adapter/persistence/typeorm/TypeOrmLogger';
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
        TypeOrmModule.forRoot({
            name: 'default',
            type: 'mysql',
            host: DatabaseConfig.DB_HOST,
            port: DatabaseConfig.DB_PORT,
            username: DatabaseConfig.DB_USERNAME,
            password: DatabaseConfig.DB_PASSWORD,
            database: DatabaseConfig.DB_NAME,
            logging: DatabaseConfig.DB_LOG_ENABLE ? 'all' : false,
            logger: DatabaseConfig.DB_LOG_ENABLE ? TypeOrmLogger.new() : undefined,
            entities: [`${TypeOrmDirectory}/entity/**/*{.ts,.js}`],
            migrationsRun: true,
            migrations: [`${TypeOrmDirectory}/migration/**/*{.ts,.js}`],
            migrationsTransactionMode: 'all',
        })
    ],
    providers: providers,
    exports: [
        DITokens.CoreDITokens.CommandBus,
        DITokens.CoreDITokens.QueryBus,
        DITokens.CoreDITokens.EventBus,
    ]
})
export class InfraModule implements OnApplicationBootstrap {
    onApplicationBootstrap(): void {
        initializeTransactionalContext();
    }
}