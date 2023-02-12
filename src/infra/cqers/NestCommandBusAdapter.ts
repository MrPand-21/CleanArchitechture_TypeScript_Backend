import { Injectable } from '@nestjs/common';
import { CommandBus, ICommand } from '@nestjs/cqrs';
import { ICommandBus } from '../../core/common/cqers/buses/ICommandBus';

@Injectable()
export class NestCommandBusAdapter implements ICommandBus {

    constructor(
        private readonly commandBus: CommandBus
    ) { }

    public async sendCommand<TCommand>(command: TCommand): Promise<void> {
        return this.commandBus.execute(command!);
    }

}