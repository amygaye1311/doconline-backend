import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Doctor } from './doctors.entity';
import { Hospital } from '../hospitals/hospitals.entity';
import { DoctorDto } from './dto/doctors.dto';

@Injectable()
export class DoctorsService {
  constructor(
    @InjectRepository(Doctor)
    private doctorRepository: Repository<Doctor>,
    @InjectRepository(Hospital)
    private hospitalRepository: Repository<Hospital>,
  ) {}

  findAll() {
    return this.doctorRepository.find({
      relations: { hospital: true },
    });
  }

  findOne(id: number) {
    return this.doctorRepository.findOne({
      where: { id },
      relations: { hospital: true },
    });
  }

  async create(doctorDto: DoctorDto) {
    const hospital = await this.hospitalRepository.findOneBy({ id: doctorDto.hospitalId });
    if (!hospital) {
      throw new Error('Hospital not found');
    }
    const doctor = this.doctorRepository.create({
      firstName: doctorDto.firstName,
      lastName: doctorDto.lastName,
      speciality: doctorDto.speciality,
      phone: doctorDto.phone,
      email: doctorDto.email,
      hospital,
    });
    return this.doctorRepository.save(doctor);
  }

  async update(id: number, doctorDto: DoctorDto) {
    const hospital = await this.hospitalRepository.findOneBy({ id: doctorDto.hospitalId });
    if (!hospital) {
      throw new Error('Hospital not found');
    }
    await this.doctorRepository.update(id, {
      firstName: doctorDto.firstName,
      lastName: doctorDto.lastName,
      speciality: doctorDto.speciality,
      phone: doctorDto.phone,
      email: doctorDto.email,
      hospital,
    });
    return this.findOne(id);
  }

  remove(id: number) {
    return this.doctorRepository.delete(id);
  }
}