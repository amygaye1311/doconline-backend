import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  app.enableCors(); 

  // Activation de la validation automatique globale pour tous les DTOs
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true, // Supprime les champs qui ne sont pas définis dans le DTO
    forbidNonWhitelisted: true, // Renvoie une erreur si des champs inconnus sont envoyés
    transform: true, // Transforme automatiquement les types si nécessaire
  }));

  await app.listen(3000);
}
bootstrap();