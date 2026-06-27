import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RendezVousModule } from './rendez-vous/rendez-vous.module';
import { AuthModule } from './auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    // 🟢 DATABASE CONNECTION
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'rendez-vous_db',
      autoLoadEntities: true,
      synchronize: true,
    }),

    // 📅 MODULE RENDEZ-VOUS
    RendezVousModule,

    // 🔐 MODULE AUTH (ÉTAPE 7 AJOUTÉE)
    AuthModule,
  ],
})
export class AppModule {}
