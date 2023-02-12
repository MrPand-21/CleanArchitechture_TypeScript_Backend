import { Injectable } from '@nestjs/common';
import { EventBus } from '@nestjs/cqrs';
import { IEventBus } from '../../core/common/cqers/buses/IEventBus';

@Injectable()
export class NestEventBusAdapter implements IEventBus {

    constructor(
        private readonly eventBus: EventBus
    ) { }

    public async sendEvent<TEvent>(event: TEvent): Promise<void> {
        return this.eventBus.publish(event!);
    }

}