import { ApiProperty } from '@nestjs/swagger';
import { HttpRestApiResponse } from '../HttpRestApiResponse';
import { HttpRestApiModelUser } from './HttpRestApiModelUser';

export class HttpRestApiResponseUser extends HttpRestApiResponse {
    @ApiProperty({ type: HttpRestApiModelUser })
    public data!: HttpRestApiModelUser;
}