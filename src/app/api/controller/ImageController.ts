import { CreateImageService } from './../../../core/service/image/usecase/CreateImageService';
import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Inject, Logger, Param, Post, Query } from '@nestjs/common';
import { ApiBearerAuth, ApiBody, ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CoreApiResponse } from '../../../core/common/response/ApiResponse';
import { ImageDITokens } from '../../../core/domain/image/imageDITokens';
import { CreateImageUseCase } from '../../../core/domain/image/usecase/CreateImageUseCase';
import { ImageUseCaseDTO } from '../../../core/domain/image/usecase/dto/ImageUseCaseDTO';
import { GetImagesUseCase } from '../../../core/domain/image/usecase/GetImagesUseCase';
import { GetImageUseCase } from '../../../core/domain/image/usecase/GetImageUseCase';
import { RemoveImageUseCase } from '../../../core/domain/image/usecase/RemoveImageUseCase';
import { CreateImageAdapter } from '../../../infra/adapter/usecase/image/CreateImageAdapter';
import { GetImageAdapter } from '../../../infra/adapter/usecase/image/GetImageAdapter';
import { GetImagesAdapter } from '../../../infra/adapter/usecase/image/GetImagesAdaper';
import { RemoveImageAdapter } from '../../../infra/adapter/usecase/image/RemoveImageAdapter';
import { HttpAuth } from '../auth/decorator/HttpAuth';
import { HttpRestApiModelCreateImageBody } from './documentation/image/HttpRestApiModelCreateImageBody';
import { HttpRestApiModelGetImagesQuery } from './documentation/image/HttpRestApiModelGetImagesQuery';
import { HttpRestApiResponseImage } from './documentation/image/HttpRestApiResponseImage';
import { HttpRestApiResponseImages } from './documentation/image/HttpRestApiResponseImages';


@Controller('images')
@ApiTags('images')
export class ImageController {

    constructor(
        /*
        @Inject(ImageDITokens.CreateImageUseCase)
        private readonly createImageUseCase: CreateImageUseCase,*/
        private readonly createImageService: CreateImageService,

        @Inject(ImageDITokens.GetImageUseCase)
        private readonly getImageUseCase: GetImageUseCase,

        @Inject(ImageDITokens.GetImagesUseCase)
        private readonly getImagesUseCase: GetImagesUseCase,

        @Inject(ImageDITokens.RemoveImageUseCase)
        private readonly removeImageUseCase: RemoveImageUseCase,
    ) { }

    @Post("add")
    @HttpCode(HttpStatus.OK)
    @ApiBody({ type: HttpRestApiModelCreateImageBody })
    @ApiResponse({ status: HttpStatus.OK, type: HttpRestApiResponseImage })
    public async createImage(
        @Body() body: HttpRestApiModelCreateImageBody

    ): Promise<CoreApiResponse<ImageUseCaseDTO>> {

        const adapter: CreateImageAdapter = await CreateImageAdapter.new({
            parentId: body.parentId,
            title: body.title,
            imageUrl: body.imageUrl,
            type: body.type
        });

        Logger.log(adapter, "CreateImageAdapter")

        const createdImage: ImageUseCaseDTO = await this.createImageService.execute(adapter);

        Logger.log(createdImage, "createdImage")

        return CoreApiResponse.success(createdImage);
    }

    @Get("getAll")
    @HttpAuth(0, 1, 2)
    @HttpCode(HttpStatus.OK)
    @ApiBearerAuth()
    @ApiQuery({ name: 'authorId', type: 'string', required: false })
    @ApiResponse({ status: HttpStatus.OK, type: HttpRestApiResponseImages })
    public async getImagesList(
        @Query() query: HttpRestApiModelGetImagesQuery

    ): Promise<CoreApiResponse<ImageUseCaseDTO[]>> {


        const adapter: GetImagesAdapter = await GetImagesAdapter.new({
            parentId: query.parentId,
            options: {}
        });
        const posts: ImageUseCaseDTO[] = await this.getImagesUseCase.execute(adapter);
        return CoreApiResponse.success(posts);
    }

    @Get(':imageId')
    @HttpAuth(0, 1, 2)
    @HttpCode(HttpStatus.OK)
    @ApiBearerAuth()
    @ApiResponse({ status: HttpStatus.OK, type: HttpRestApiResponseImages })
    public async getImage(
        @Param('imageId') imageId: string

    ): Promise<CoreApiResponse<ImageUseCaseDTO>> {
        const adapter: GetImageAdapter = await GetImageAdapter.new({ imageId: imageId });
        const post: ImageUseCaseDTO = await this.getImageUseCase.execute(adapter);

        return CoreApiResponse.success(post);
    }

    @Delete(':imageId')
    @HttpAuth(0, 1, 2)
    @HttpCode(HttpStatus.OK)
    @ApiBearerAuth()
    @ApiResponse({ status: HttpStatus.OK, type: HttpRestApiResponseImages })
    public async removeImage(
        @Param('imageId') imageId: string

    ): Promise<CoreApiResponse<void>> {
        const adapter: RemoveImageAdapter = await RemoveImageAdapter.new({ imageId: imageId });
        await this.removeImageUseCase.execute(adapter);

        return CoreApiResponse.success();
    }

}