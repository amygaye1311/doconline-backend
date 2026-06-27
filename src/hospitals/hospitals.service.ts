import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Hospital } from './hospitals.entity';
import { CreateHospitalDto } from './dto/hospital.dto';
import { UpdateHospitalDto } from './dto/update-hospital.dto';

@Injectable()
export class HospitalsService {
  constructor(
    @InjectRepository(Hospital)
    private hospitalRepo: Repository<Hospital>,
  ) {}

  create(data: CreateHospitalDto) {
    const hospital = this.hospitalRepo.create(data);
    return this.hospitalRepo.save(hospital);
  }

  findAll() {
    return this.hospitalRepo.find({
      relations: { doctors: true },
    });
  }

  findOne(id: number) {
    return this.hospitalRepo.findOneBy({ id });
  }

  async update(id: number, data: UpdateHospitalDto) {
    await this.hospitalRepo.update(id, data);
    return this.findOne(id);
  }

  delete(id: number) {
    return this.hospitalRepo.delete(id);
  }
}