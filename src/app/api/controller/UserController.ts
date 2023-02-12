import { Body, Controller, Get, HttpCode, HttpStatus, Inject, Post } from '@nestjs/common';
import { ApiBearerAuth, ApiBody, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CoreApiResponse } from '../../../core/common/response/ApiResponse';
import { CreateUserUseCase } from '../../../core/domain/user/usecase/CreateUserUseCase';
import { UserUseCaseDto } from '../../../core/domain/user/entity/UserUseCaseDTO';
import { GetUserUseCase } from '../../../core/domain/user/usecase/GetUserUseCase';
import { UserDITokens } from '../../../core/domain/user/userDITokens';
import { CreateUserAdapter } from '../../../infra/adapter/DTOs/user/CreateUserDTO';
import { GetUserAdapter } from '../../../infra/adapter/DTOs/user/GetUserDTO';
import { HttpAuth } from '../auth/decorator/HttpAuth';
import { HttpUser } from '../auth/decorator/HttpUser';
import { HttpUserPayload } from '../auth/HttpAuthTypes';
import { HttpRestApiModelCreateUserBody } from './documentation/user/HttpRestApiModelCreateUserBody';
import { HttpRestApiResponseUser } from './documentation/user/HttpRestApiResponseUser';

@Controller('users')
@ApiTags('users')
export class UserController {

    constructor(
        @Inject(UserDITokens.CreateUserUseCase)
        private readonly createUserUseCase: CreateUserUseCase,

        @Inject(UserDITokens.GetUserUseCase)
        private readonly getUserUseCase: GetUserUseCase,
    ) { }

    @Post('add')
    @HttpCode(HttpStatus.OK)
    @ApiBearerAuth()
    @ApiBody({ type: HttpRestApiModelCreateUserBody })
    @ApiResponse({ status: HttpStatus.OK, type: HttpRestApiResponseUser })
    public async createAccount(
        @Body() body: HttpRestApiModelCreateUserBody

    ): Promise<CoreApiResponse<UserUseCaseDto>> {
        const adapter: CreateUserAdapter = await CreateUserAdapter.new({

            firstName: body.firstName,
            lastName: body.lastName ? body.lastName : null,
            email: body.email,
            role: body.role,
            passwordHash: body.passwordHash,
            birthDate: body.birthDate ? body.birthDate : null,

        });

        const createdUser: UserUseCaseDto = await this.createUserUseCase.execute(adapter);

        return CoreApiResponse.success(createdUser);
    }

    @Get('get-by-id')
    @HttpCode(HttpStatus.OK)
    @ApiBearerAuth()
    @HttpAuth(0, 1, 2) //TODO: change variables to enum
    @ApiResponse({ status: HttpStatus.OK, type: HttpRestApiResponseUser })
    public async getUser(
        @HttpUser() httpUser: HttpUserPayload

    ): Promise<CoreApiResponse<UserUseCaseDto>> {
        const adapter: GetUserAdapter = await GetUserAdapter.new({ userId: httpUser.id });
        const user: UserUseCaseDto = await this.getUserUseCase.execute(adapter);

        return CoreApiResponse.success(user);
    }

}