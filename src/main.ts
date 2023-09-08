import { NestFactory, Reflector } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { AtGuard } from './common/guards';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true,
  }))

  // const reflector = new Reflector() // 

  // app.useGlobalGuards(new AtGuard(reflector)) // This is the old way of doing it, but it still works. AtGuard is now implemented at the global level in app.module.ts. usign this way is not support for dependency injection. that's why i have to create reflector and pass it to the AtGuard constructor.
  await app.listen(3333);
}
bootstrap();
