import { RootModule } from './di/.RootModule';
import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { DocumentBuilder, OpenAPIObject, SwaggerModule } from '@nestjs/swagger';
import { ApiServerConfig } from '../infra/config/ApiServerConfig';
import { AppDataSource } from 'data-source';
import { TypeOrmLogger } from '@infra/adapter/persistence/typeorm/TypeOrmLogger';

declare const module: any;

export class ServerApplication {

    public async run(): Promise<void> {
        const app: NestExpressApplication = await NestFactory.create<NestExpressApplication>(RootModule);
        this.buildAPIDocumentation(app);
        this.log();

        await app.listen(ApiServerConfig.PORT);

        /*
        await AppDataSource.initialize().then(() => {
            TypeOrmLogger.new().log('info', "Database connected to " + ServerApplication.name);
        }).catch((error) => {
            TypeOrmLogger.new().log('warn', "Database connection error: " + error);
        });*/


        if (module.hot) {
            module.hot.accept();
            module.hot.dispose(() => app.close());
        }
    }

    private buildAPIDocumentation(app: NestExpressApplication): void {
        const title: string = 'Turix Game Website';
        const description: string = 'Turix website API documentation';
        const version: string = '1.0.0';

        const options: Omit<OpenAPIObject, 'paths'> = new DocumentBuilder()
            .setTitle(title)
            .setDescription(description)
            .setVersion(version)
            .addBearerAuth({ type: 'apiKey', in: 'header', name: ApiServerConfig.ACCESS_TOKEN_HEADER })
            .build()

        const document: OpenAPIObject = SwaggerModule.createDocument(app, options);

        SwaggerModule.setup('documentation', app, document);
    }

    private log(): void {
        Logger.log(`Server started on host: ${ApiServerConfig.HOST}; port: ${ApiServerConfig.PORT};`, ServerApplication.name);
    }

    public static new(): ServerApplication {
        return new ServerApplication();
    }

}