import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PharmaciesModule } from './pharmacies/pharmacies.module';
import { Pharmacy } from './pharmacies/entities/pharmacy.entity';
import { Medicine } from './pharmacies/entities/medicine.entity';
import { WeatherModule } from './weather/weather.module';
import { DoctorsModule } from './docteurs/doctors.module';
import { HospitalsModule } from './hospitals/hospitals.module';
import { Hospital } from './hospitals/hospitals.entity';
import { Doctor } from './docteurs/doctors.entity';
import { SeedService } from './seed/seed.service';
import { RendezVousModule } from './rendez-vous/rendez-vous.module';
import { AuthModule } from './auth/auth.module';
import { RendezVous } from './rendez-vous/entities/rendez-vous.entity';
import { User } from './rendez-vous/entities/user.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'doconline_db',
      entities: [Pharmacy, Medicine, Hospital, Doctor, RendezVous, User],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([Hospital, Doctor, Pharmacy, RendezVous, User]),

    PharmaciesModule,
    WeatherModule,
    DoctorsModule,
    HospitalsModule,
    RendezVousModule,
    AuthModule,
  ],
  providers: [SeedService],
})
export class AppModule {}
