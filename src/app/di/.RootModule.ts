import { InfraModule } from './InfraModule';
import { ImageModule } from './ImageModule';
import { Module } from '@nestjs/common';
import { AuthModule } from './AuthModule';
import { ConfigModule } from '@nestjs/config';
import { UserModule } from './UserModule';

@Module({
    imports: [
        ConfigModule.forRoot({
            envFilePath: ['../../../env/local.app.env'],
            isGlobal: true
        }),
        InfraModule,
        AuthModule,
        UserModule,
        ImageModule,
    ]
})
export class RootModule { }