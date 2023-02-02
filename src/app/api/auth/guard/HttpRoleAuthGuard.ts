import { Result } from './../../../../core/common/response/Result';
import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Exception } from '../../../../core/common/response/Exception';
import { HttpRequestWithUser } from '../HttpAuthTypes';


@Injectable()
export class HttpRoleAuthGuard implements CanActivate {

    constructor(
        private readonly reflector: Reflector
    ) { }

    public async canActivate(context: ExecutionContext): Promise<boolean> {
        const roles: number[] = this.reflector.get<number[]>('roles', context.getHandler()) || [];
        const request: HttpRequestWithUser = context.switchToHttp().getRequest();

        const canActivate: boolean = roles.length > 0
            ? roles.includes(request.user.role)
            : true;

        if (!canActivate) {

            throw Exception.new({ resultDescription: Result.ACCESS_DENIED_ERROR });
        }

        return canActivate;
    }

}