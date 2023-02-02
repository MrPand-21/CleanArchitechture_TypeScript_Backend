import { ApiProperty } from '@nestjs/swagger';
import { HttpRestApiResponse } from '../HttpRestApiResponse';
import { HttpRestApiModelLoggedInUser } from './HttpRestApiModelLoggedInUser';

export class HttpRestApiResponseLoggedInUser extends HttpRestApiResponse {

    @ApiProperty({ type: HttpRestApiModelLoggedInUser })
    public data: HttpRestApiModelLoggedInUser;

}