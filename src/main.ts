import { NestFactory } from '@nestjs/core';
import { ApplicationModule } from './app.module';
import {AnyExceptionFilter} from './core/exceptions/any-exception.filter';

async function bootstrap() {
    const app = await NestFactory.create(ApplicationModule);
    app.setGlobalPrefix('api');
    app.useGlobalFilters(new AnyExceptionFilter());
    await app.listen(3001);
}
bootstrap();