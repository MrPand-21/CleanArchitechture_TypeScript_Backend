import { Inject, Injectable } from '@nestjs/common';
import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { Optional } from '../../core/common/commonTypes';
import { GetUserQuery } from '../../core/common/cqers/queries/user/getUserQuery';
import { GetUserQueryResult } from '../../core/common/cqers/queries/user/results/getUserQueryResult';
import { GetUserQueryHandler } from '../../core/domain/user/handler/GetUserQueryHandler';
import { UserDITokens } from '../../core/domain/user/userDITokens';

@Injectable()
@QueryHandler(GetUserQuery)
export class NestWrapperGetUserQueryHandler implements IQueryHandler {

    constructor(
        @Inject(UserDITokens.GetUserQueryHandler)
        private readonly handleService: GetUserQueryHandler
    ) { }

    public async execute(query: GetUserQuery): Promise<Optional<GetUserQueryResult>> {
        return this.handleService.handle(query);
    }

}