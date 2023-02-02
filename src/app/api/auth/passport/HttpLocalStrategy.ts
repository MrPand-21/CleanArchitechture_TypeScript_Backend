import { Result } from './../../../../core/common/response/Result';
import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { Exception } from '../../../../core/common/response/Exception';
import { CoreAssert } from '../../../../core/common/utils/assert';
import { HttpAuthService } from '../HttpAuthService';
import { HttpUserPayload } from '../HttpAuthTypes';
import { ApiServerConfig } from '../../../../infra/config/ApiServerConfig';

@Injectable()
export class HttpLocalStrategy extends PassportStrategy(Strategy) {

    constructor(private authService: HttpAuthService) {
        super({
            usernameField: ApiServerConfig.LOGIN_USERNAME_FIELD,
            passwordField: ApiServerConfig.LOGIN_PASSWORD_FIELD,
        });
    }

    public async validate(username: string, password: string): Promise<HttpUserPayload> {
        const user: HttpUserPayload = CoreAssert.notEmpty(
            await this.authService.validateUser(username, password),
            Exception.new({ resultDescription: Result.WRONG_CREDENTIALS_ERROR })
        );

        return user;
    }

}