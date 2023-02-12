import { Result } from './../../../../core/common/response/Result';
import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { Exception } from '../../../../core/common/response/Exception';
import { CoreAssert } from '../../../../core/common/utils/CoreAssert';
import { User } from '../../../../core/domain/user/entity/User';
import { HttpAuthService } from '../HttpAuthService';
import { HttpJwtPayload, HttpUserPayload } from '../HttpAuthTypes';
import { ApiServerConfig } from '../../../../infra/config/ApiServerConfig';

@Injectable()
export class HttpJwtStrategy extends PassportStrategy(Strategy) {

    constructor(private authService: HttpAuthService) {
        super({
            jwtFromRequest: ExtractJwt.fromHeader(ApiServerConfig.ACCESS_TOKEN_HEADER),
            ignoreExpiration: false,
            secretOrKey: ApiServerConfig.ACCESS_TOKEN_SECRET,
        });
    }

    public async validate(payload: HttpJwtPayload): Promise<HttpUserPayload> {
        const user: User = CoreAssert.notEmpty(
            await this.authService.getUser({ id: payload.id }),
            Exception.new({ resultDescription: Result.UNAUTHORIZED_ERROR })
        );

        return { id: user.getId(), email: user.getEmail(), role: user.getRole() ? user.getRole()! : 0 };
    }

}