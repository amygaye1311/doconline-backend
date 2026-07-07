import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PharmaciesService } from './pharmacies.service';
import { PharmaciesController } from './pharmacies.controller';
import { Pharmacy } from './entities/pharmacy.entity';
import { Medicine } from './entities/medicine.entity';
import { WeatherService } from '../weather/weather.service'; // Importation du service météo

@Module({
  imports: [
    TypeOrmModule.forFeature([Pharmacy, Medicine]),
  ],
  controllers: [PharmaciesController],
  providers: [
    PharmaciesService, 
    WeatherService // Ajout du service pour qu'il soit injectable dans le contrôleur
  ],
  exports: [PharmaciesService],
})
export class PharmaciesModule {}