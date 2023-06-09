import { GetUserQueryResult } from './../../../../core/common/cqers/results/GetUserQueryResult';
import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { HttpRequestWithUser } from '../HttpAuthTypes';

export const HttpUser: () => any = createParamDecorator((data: unknown, ctx: ExecutionContext) => {
    const request: HttpRequestWithUser = ctx.switchToHttp().getRequest();
    return request.user;
});