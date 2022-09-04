export interface IQueryHandler<TQuery, TQueryResult> {
    handle(query: TQuery): Promise<TQueryResult>;
}