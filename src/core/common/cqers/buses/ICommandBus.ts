export interface ICommandBus {
    sendCommand<TCommand extends object>(command: TCommand): Promise<void>;
}