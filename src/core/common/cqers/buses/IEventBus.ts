export interface IEventBus {
    sendEvent<TEvent extends object>(event: TEvent): Promise<void>;
}