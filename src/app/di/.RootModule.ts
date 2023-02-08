import { InfraModule } from './InfraModule';
import { ImageModule } from './ImageModule';
import { Module } from '@nestjs/common';
import { AuthModule } from './AuthModule';
import { UserModule } from './UserModule';

@Module({
    imports: [
        InfraModule,
        AuthModule,
        UserModule,
        ImageModule
    ]
})
export class RootModule { }