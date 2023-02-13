import { ICreateImageDTO } from '@core/domain/image/abstract/DTOs/ICreateImageDTO';
import { ImageHandler } from './../../../core/service/handler/ImageHandler';
import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Inject, Logger, Param, Post, Query } from '@nestjs/common';
import { ApiBearerAuth, ApiBody, ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CoreApiResponse } from '../../../core/common/response/ApiResponse';
import { ImageUseCaseDTO } from '../../../core/domain/image/entity/ImageUseCaseDTO';
import { HttpAuth } from '../auth/decorator/HttpAuth';
import { HttpRestApiModelCreateImageBody } from './documentation/image/HttpRestApiModelCreateImageBody';
import { HttpRestApiModelGetImagesQuery } from './documentation/image/HttpRestApiModelGetImagesQuery';
import { HttpRestApiResponseImage } from './documentation/image/HttpRestApiResponseImage';
import { HttpRestApiResponseImages } from './documentation/image/HttpRestApiResponseImages';
import { ImageService } from '@core/service/service/ImageService';
import { CreateImageDTO } from '@infra/adapter/DTOs/image/CreateImageDTO';
import { GetImagesDTO } from '@infra/adapter/DTOs/image/GetImagesDTO';
import { GetImageDTO } from '@infra/adapter/DTOs/image/GetImageDTO';
import { RemoveImageDTO } from '@infra/adapter/DTOs/image/RemoveImageDTO';


@Controller('images')
@ApiTags('images')
export class ImageController {

    constructor(
        private readonly imageService: ImageService,
        private readonly imageHandler: ImageHandler,
    ) { }

    @Post("add")
    @HttpCode(HttpStatus.OK)
    @ApiBody({ type: HttpRestApiModelCreateImageBody })
    @ApiResponse({ status: HttpStatus.OK, type: HttpRestApiResponseImage })
    public async createImage(
        @Body() body: HttpRestApiModelCreateImageBody

    ): Promise<CoreApiResponse<ImageUseCaseDTO>> {

        const adapter: ICreateImageDTO = await CreateImageDTO.new({
            parentId: body.parentId,
            title: body.title,
            imageUrl: body.imageUrl,
            type: body.type
        });

        Logger.log(adapter, "CreateImageDTO")

        const createdImage: ImageUseCaseDTO = await this.imageService.createImage(adapter);

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

        const adapter: GetImagesDTO = await GetImagesDTO.new({
            parentId: query.parentId,
            options: {}
        });
        const posts: ImageUseCaseDTO[] = await this.imageService.getImages(adapter);
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
        const adapter: GetImageDTO = await GetImageDTO.new({ imageId: imageId });
        const post: ImageUseCaseDTO = await this.imageService.getImage(adapter);

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
        const adapter: RemoveImageDTO = await RemoveImageDTO.new({ imageId: imageId });
        await this.imageService.removeImage(adapter);
        return CoreApiResponse.success();
    }

}