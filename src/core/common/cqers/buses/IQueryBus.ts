export interface IQueryBus {
    sendQuery<TQuery extends object, TQueryResult>(query: TQuery): Promise<TQueryResult>;
}