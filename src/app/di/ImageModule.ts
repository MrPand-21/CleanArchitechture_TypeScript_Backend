import { ImageHandler } from './../../core/service/handler/ImageHandler';
import { ImageService } from './../../core/service/service/ImageService';
import { Module, Provider } from '@nestjs/common';
import { DITokens } from '../../core/DITokens';
import { TypeOrmImageRepositoryAdapter } from '../../infra/adapter/persistence/typeorm/repository/TypeOrmImageRepositoryAdapter';
import { ImageController } from '../api/controller/ImageController';

const persistenceProviders: Provider[] = [
    {
        provide: DITokens.ImageDITokens.ImageRepository,
        useClass: TypeOrmImageRepositoryAdapter
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