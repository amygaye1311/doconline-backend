import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Hospital } from './hospitals.entity';
import { Doctor } from '../docteurs/doctors.entity';
import { HospitalsController } from './hospitals.controller';
import { HospitalsService } from './hospitals.service';

@Module({
  imports: [TypeOrmModule.forFeature([Hospital, Doctor])],
  controllers: [HospitalsController],
  providers: [HospitalsService],
})
export class HospitalsModule {}