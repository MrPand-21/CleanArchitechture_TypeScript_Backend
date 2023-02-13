import { ImageHandler } from './../../core/service/handler/ImageHandler';
import { ImageService } from './../../core/service/service/ImageService';
import { TypeOrmImage } from '../../infra/adapter/persistence/typeorm/entity/TypeOrmImage';
import { Module, Provider } from '@nestjs/common';
import { DITokens } from '../../core/DITokens';
import { TypeOrmImageRepositoryAdapter } from '../../infra/adapter/persistence/typeorm/repository/TypeOrmImageRepositoryAdapter';
import { ImageController } from '../api/controller/ImageController';
import { DataSource } from 'typeorm';

const persistenceProviders: Provider[] = [
    {
        provide: DITokens.ImageDITokens.ImageRepository,
        useFactory: (dataSource: DataSource) => dataSource.getRepository(TypeOrmImage).extend(TypeOrmImageRepositoryAdapter),
        inject: [DITokens.CoreDITokens.DataSource]

    }
];

@Module({
    controllers: [
        ImageController
    ],
    providers: [
        ...persistenceProviders,
        ImageService,
        ImageHandler
    ]
})
export class ImageModule { }