import { ICreateUserDTO } from '@core/domain/user/abstract/DTOs/ICreateUserDTO';
import { IGetUserDTO } from '@core/domain/user/abstract/DTOs/IGetUserDTO';
import { UserHandler } from '@core/service/handler/UserHandler';
import { UserService } from '@core/service/service/UserService';
import { CreateUserDTO } from '@infra/adapter/DTOs/user/CreateUserDTO';
import { GetUserDTO } from '@infra/adapter/DTOs/user/GetUserDTO';
import { Body, Controller, Get, HttpCode, HttpStatus, Inject, Post } from '@nestjs/common';
import { ApiBearerAuth, ApiBody, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CoreApiResponse } from '../../../core/common/response/apiResponse';
import { UserUseCaseDto } from '../../../core/domain/user/entity/UserUseCaseDTO';
import { HttpAuth } from '../auth/decorator/HttpAuth';
import { HttpUser } from '../auth/decorator/HttpUser';
import { HttpUserPayload } from '../auth/HttpAuthTypes';
import { HttpRestApiModelCreateUserBody } from './documentation/user/HttpRestApiModelCreateUserBody';
import { HttpRestApiResponseUser } from './documentation/user/HttpRestApiResponseUser';

@Controller('users')
@ApiTags('users')
export class UserController {

    constructor(
        private readonly userService: UserService,
        private readonly userHandler: UserHandler,
    ) { }

    @Post('add')
    @HttpCode(HttpStatus.OK)
    @ApiBearerAuth()
    @ApiBody({ type: HttpRestApiModelCreateUserBody })
    @ApiResponse({ status: HttpStatus.OK, type: HttpRestApiResponseUser })
    public async createAccount(
        @Body() body: HttpRestApiModelCreateUserBody

    ): Promise<CoreApiResponse<UserUseCaseDto>> {


        const adapter: ICreateUserDTO = await CreateUserDTO.new({

            firstName: body.firstName ? body.firstName : null,
            lastName: body.lastName ? body.lastName : null,
            email: body.email,
            role: body.role,
            passwordHash: body.passwordHash,
            birthDate: body.birthDate ? body.birthDate : null,

        });

        const createdUser: UserUseCaseDto = await this.userService.createUser(adapter);

        return CoreApiResponse.success(createdUser);
    }

    @Get('get-by-id')
    @HttpCode(HttpStatus.OK)
    @ApiBearerAuth()
    @HttpAuth(0, 1, 2) //TODO: change variables to enum
    @ApiResponse({ status: HttpStatus.OK, type: HttpRestApiResponseUser })
    public async getUserById(
        @HttpUser() httpUser: HttpUserPayload

    ): Promise<CoreApiResponse<UserUseCaseDto>> {

        const adapter: IGetUserDTO = await GetUserDTO.new({ userId: httpUser.id });
        const user: UserUseCaseDto = await this.userService.getUser(adapter);

        return CoreApiResponse.success(user);
    }

    @Get('get-by-email')
    @HttpCode(HttpStatus.OK)
    @ApiBearerAuth()
    @HttpAuth(0, 1, 2)
    @ApiResponse({ status: HttpStatus.OK, type: HttpRestApiResponseUser })
    public async getUserByEmail(
        @HttpUser() httpUser: HttpUserPayload

    ): Promise<CoreApiResponse<UserUseCaseDto>> {
        const adapter: IGetUserDTO = await GetUserDTO.new({ email: httpUser.email });
        const user: UserUseCaseDto = await this.userService.getUser(adapter);

        return CoreApiResponse.success(user);
    }

    @Get('get-all')
    @HttpCode(HttpStatus.OK)
    @ApiBearerAuth()
    @HttpAuth(0, 1, 2) //TODO: change variables to enum
    @ApiResponse({ status: HttpStatus.OK, type: HttpRestApiResponseUser })
    public async getUsersList(

    ): Promise<CoreApiResponse<UserUseCaseDto[]>> {
        const users: UserUseCaseDto[] = await this.userService.getUserList();

        return CoreApiResponse.success(users);
    }

}