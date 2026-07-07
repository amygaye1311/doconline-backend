import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DoctorsController } from './doctors.controller';
import { DoctorsService } from './doctors.service';
import { Doctor } from './doctors.entity';
import { Hospital } from '../hospitals/hospitals.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Doctor, Hospital])],
  controllers: [DoctorsController],
  providers: [DoctorsService],
})
export class DoctorsModule {}
