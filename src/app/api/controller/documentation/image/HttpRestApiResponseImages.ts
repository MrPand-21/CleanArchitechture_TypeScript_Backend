import { ApiProperty } from '@nestjs/swagger';
import { HttpRestApiResponse } from '../HttpRestApiResponse';
import { HttpRestApiModelImage } from './HttpRestApiModelImage';

export class HttpRestApiResponseImages extends HttpRestApiResponse {
    @ApiProperty({ type: HttpRestApiModelImage, isArray: true })
    public data!: HttpRestApiModelImage[];
}