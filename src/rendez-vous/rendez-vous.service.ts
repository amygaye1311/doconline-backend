import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { RendezVous } from './entities/rendez-vous.entity';
import { CreateRendezVousDto } from './dto/create-rendez-vous.dto';
import { UpdateRendezVousDto } from './dto/update-rendez-vous.dto';

@Injectable()
export class RendezVousService {
  constructor(
    @InjectRepository(RendezVous)
    private repo: Repository<RendezVous>,
  ) {}

  // 🟢 CREATE
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  create(dto: CreateRendezVousDto, id: any) {
    const rdv = this.repo.create(dto);
    return this.repo.save(rdv);
  }

  // 🟢 GET ALL
  findAll() {
    return this.repo.find();
  }

  // 🟢 GET ONE
  findOne(id: number) {
    return this.repo.findOneBy({ id });
  }

  // 🟢 UPDATE
  update(id: number, dto: UpdateRendezVousDto) {
    return this.repo.update(id, dto);
  }

  // 🟢 DELETE
  remove(id: number) {
    return this.repo.delete(id);
  }

  // 🔥 MES RENDEZ-VOUS (AVEC CORRECTION)
  findMyRendezVous(userId: number) {
    return this.repo.find({
      where: {
        user: { id: userId },
      },
      relations: {
        user: true,
      },
    });
  }
}
