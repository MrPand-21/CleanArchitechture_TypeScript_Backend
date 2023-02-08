import { TypeOrmImage } from '../../infra/adapter/persistence/typeorm/entity/TypeOrmImage';
import { Module, Provider } from '@nestjs/common';
import { CoreDITokens } from '../../core/common/cqers/CoreDITokens';
import { ImageDITokens } from '../../core/domain/image/imageDITokens';
import { RemoveImageUseCase } from '../../core/domain/image/usecase/RemoveImageUseCase';
import { CreateImageService } from '../../core/service/image/usecase/CreateImageService';
import { GetImageService } from '../../core/service/image/usecase/GetImageService';
import { GetImagesService } from '../../core/service/image/usecase/GetImagesService';
import { RemoveImageService } from '../../core/service/image/usecase/RemoveImageService';
import { TypeOrmImageRepositoryAdapter } from '../../infra/adapter/persistence/typeorm/repository/TypeOrmImageRepositoryAdapter';
import { TransactionalUseCaseWrapper } from '../../infra/TransactionalUseCaseWrapper';
import { ImageController } from '../api/controller/ImageController';
import { DataSource } from 'typeorm';
import { DataBaseModule } from './DatabaseModule';
import { CreateImageUseCase } from '@core/domain/image/usecase/createImageUseCase';

const persistenceProviders: Provider[] = [
    {
        provide: ImageDITokens.ImageRepository,
        useFactory: (dataSource: DataSource) => dataSource.getRepository(TypeOrmImage).extend(TypeOrmImageRepositoryAdapter),
        inject: [CoreDITokens.DataSource]

    }
];

const useCaseProviders: Provider[] = [

    {
        provide: ImageDITokens.CreateImageUseCase,
        useFactory: (imageRepository) => new CreateImageService(imageRepository),
        inject: [ImageDITokens.ImageRepository, CoreDITokens.QueryBus]
    },
    {
        provide: ImageDITokens.GetImagesUseCase,
        useFactory: (imageRepository) => new GetImagesService(imageRepository),
        inject: [ImageDITokens.ImageRepository]
    },
    {
        provide: ImageDITokens.GetImageUseCase,
        useFactory: (imageRepository) => new GetImageService(imageRepository),
        inject: [ImageDITokens.ImageRepository]
    },
    {
        provide: ImageDITokens.RemoveImageUseCase,
        useFactory: (imageRepository) => {
            const service: RemoveImageUseCase = new RemoveImageService(imageRepository);
            return new TransactionalUseCaseWrapper(service);
        },
        inject: [ImageDITokens.ImageRepository]
    },
];

const handlerProviders: Provider[] = [];

@Module({
    imports: [
        DataBaseModule
    ],
    controllers: [
        ImageController
    ],
    providers: [
        ...persistenceProviders,
        ...useCaseProviders,
        ...handlerProviders,
        CreateImageService
    ]
})
export class ImageModule { }