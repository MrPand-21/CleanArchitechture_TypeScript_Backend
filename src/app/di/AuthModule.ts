import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { ApiServerConfig } from '../../infra/config/ApiServerConfig';
import { HttpAuthService } from '../api/auth/HttpAuthService';
import { HttpJwtStrategy } from '../api/auth/passport/HttpJwtStrategy';
import { HttpLocalStrategy } from '../api/auth/passport/HttpLocalStrategy';
import { AuthController } from '../api/controller/AuthController';
import { UserModule } from './UserModule';

@Module({
    controllers: [
        AuthController
    ],
    imports: [
        PassportModule,
        JwtModule.register({
            secret: ApiServerConfig.ACCESS_TOKEN_SECRET,
            signOptions: { expiresIn: `${ApiServerConfig.ACCESS_TOKEN_TTL_IN_MINUTES}m` },
        }),
        UserModule,
    ],
    providers: [
        HttpAuthService,
        HttpLocalStrategy,
        HttpJwtStrategy
    ],
})
export class AuthModule { }