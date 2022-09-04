export interface IEventHandler<TEvent> {
    handle(event: TEvent): Promise<void>;
}