import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PharmaciesModule } from './pharmacies/pharmacies.module';
import { Pharmacy } from './pharmacies/entities/pharmacy.entity';
import { Medicine } from './pharmacies/entities/medicine.entity';
import { WeatherModule } from './weather/weather.module';
import { DoctorsModule } from './docteurs/doctors.module';
import { Doctor } from './docteurs/doctors.entity';

@Module({
  imports: [
    // ✅ Configuration de la base MySQL
    TypeOrmModule.forRoot({
      type: 'mysql', // ou 'postgres' si tu utilises PostgreSQL
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '', // ⚠️ Mets ton mot de passe MySQL si nécessaire
      database: 'doconline_db', // ⚠️ Mets le nom exact de ta base
      entities: [Pharmacy, Medicine, Doctor], // ✅ Entités liées à TypeORM
      synchronize: true, // ⚠️ Active en dev, désactive en prod
    }),

    // ✅ Modules métiers
    PharmaciesModule,
    WeatherModule,
    DoctorsModule, // ✅ ajouté ici
  ],
})
export class AppModule {}
