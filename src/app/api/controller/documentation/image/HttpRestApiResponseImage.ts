import { ApiProperty } from '@nestjs/swagger';
import { HttpRestApiResponse } from '../HttpRestApiResponse';
import { HttpRestApiModelImage } from './HttpRestApiModelImage';

export class HttpRestApiResponseImage extends HttpRestApiResponse {
    @ApiProperty({ type: HttpRestApiModelImage })
    public data!: HttpRestApiModelImage;
}