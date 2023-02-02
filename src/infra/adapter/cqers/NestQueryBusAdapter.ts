import { Injectable } from '@nestjs/common';
import { QueryBus } from '@nestjs/cqrs';
import { IQueryBus } from '../../../core/common/cqers/buses/IQueryBus';

@Injectable()
export class NestQueryBusAdapter implements IQueryBus {

    constructor(
        readonly queryBus: QueryBus
    ) {
    }

    public async sendQuery<TQuery, TQueryResult>(query: TQuery): Promise<TQueryResult> {
        return this.queryBus.execute(query!);
    }

}