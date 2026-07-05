import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { RendezVousService } from './rendez-vous.service';
import { RendezVous } from './entities/rendez-vous.entity';

describe('RendezVousService', () => {
  let service: RendezVousService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        RendezVousService,
        {
          provide: getRepositoryToken(RendezVous),
          useValue: {}, // ✅ mock du repository
        },
      ],
    }).compile();

    service = module.get<RendezVousService>(RendezVousService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
