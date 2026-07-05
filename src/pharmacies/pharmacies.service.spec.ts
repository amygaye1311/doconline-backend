import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { PharmaciesService } from './pharmacies.service';
import { Pharmacy } from './entities/pharmacy.entity';
import { Medicine } from './entities/medicine.entity';

describe('PharmaciesService', () => {
  let service: PharmaciesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        PharmaciesService,
        {
          provide: getRepositoryToken(Pharmacy),
          useValue: {}, // ✅ mock du repository Pharmacy
        },
        {
          provide: getRepositoryToken(Medicine),
          useValue: {}, // ✅ mock du repository Medicine
        },
      ],
    }).compile();

    service = module.get<PharmaciesService>(PharmaciesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
