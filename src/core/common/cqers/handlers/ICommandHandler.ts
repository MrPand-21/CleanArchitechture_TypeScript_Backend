export interface ICommandHandler<TCommand> {
    handle(command: TCommand): Promise<void>;
}