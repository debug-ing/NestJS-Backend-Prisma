import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

// import { PrismaService } from './prisma.service';

import './shared/extention/string.extention';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // const prismaService = app.get(PrismaService);
  app.useGlobalPipes(new ValidationPipe({ transform: true }));
  // await prismaService.enableShutdownHooks(app);
  await app.listen(3000);
}
bootstrap();
