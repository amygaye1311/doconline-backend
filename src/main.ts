import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // ✅ VALIDATION GLOBALE
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // enlève les champs inconnus
      forbidNonWhitelisted: true, // bloque les champs inconnus
      transform: true, // transforme les types automatiquement
    }),
  );

  await app.listen(3000);
}
bootstrap();
