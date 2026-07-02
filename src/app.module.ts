import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PharmaciesModule } from './pharmacies/pharmacies.module';
import { Pharmacy } from './pharmacies/entities/pharmacy.entity';
import { Medicine } from './pharmacies/entities/medicine.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql', // ou postgres selon ton projet
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'doconline_db', // remplace par le nom de ta base
      entities: [Pharmacy, Medicine], // <-- AJOUTE LES ENTITÉS ICI
      synchronize: true, // Permet de créer les tables automatiquement en dev
    }),
    PharmaciesModule, // <-- AJOUTE LE MODULE ICI
  ],
})
export class AppModule {}