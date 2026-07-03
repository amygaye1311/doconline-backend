import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Pharmacy } from './entities/pharmacy.entity';
import { Medicine } from './entities/medicine.entity';

@Injectable()
export class PharmaciesService {
  constructor(
    @InjectRepository(Pharmacy)
    private readonly pharmacyRepository: Repository<Pharmacy>,
    @InjectRepository(Medicine)
    private readonly medicineRepository: Repository<Medicine>,
  ) {}

  // ==========================================
  // 1. CRUD DES PHARMACIES
  // ==========================================

  async create(pharmacyData: Partial<Pharmacy>): Promise<Pharmacy> {
    const newPharmacy = this.pharmacyRepository.create(pharmacyData);
    return this.pharmacyRepository.save(newPharmacy);
  }

  async findAll(): Promise<Pharmacy[]> {
    return this.pharmacyRepository.find({ 
      relations: { medicines: true } 
    });
  }

  async findOne(id: number): Promise<Pharmacy> {
    const pharmacy = await this.pharmacyRepository.findOne({
      where: { id },
      relations: { medicines: true },
    });
    if (!pharmacy) {
      throw new NotFoundException(`Pharmacie avec l'ID ${id} introuvable`);
    }
    return pharmacy;
  }

  async update(id: number, updateData: Partial<Pharmacy>): Promise<Pharmacy> {
    await this.pharmacyRepository.update(id, updateData);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    const pharmacy = await this.findOne(id);
    await this.pharmacyRepository.remove(pharmacy);
  }

  // ==========================================
  // 2. GÉOLOCALISATION, TRI & FILTRES HORAIRES
  // ==========================================

  async findNearby(
    userLat: number, 
    userLng: number, 
    radiusInKm: number,
    openLate?: boolean,
    closeEarly?: boolean
  ): Promise<any[]> {
    const query = this.pharmacyRepository
      .createQueryBuilder('pharmacy')
      .select('pharmacy')
      // Formule de Haversine ajustée avec les champs exacts : latitude et longitude
      .addSelect(
        `( 6371 * acos( cos( radians(${userLat}) ) * cos( radians( pharmacy.latitude ) ) * cos( radians( pharmacy.longitude ) - radians(${userLng}) ) + sin( radians(${userLat}) ) * sin( radians( pharmacy.latitude ) ) ) )`,
        'distance'
      )
      .having('distance <= :radius', { radius: radiusInKm });

    // Filtre : Ferme après 22h ("22:00")
    if (openLate) {
      query.andWhere('pharmacy.closingTime > :lateTime', { lateTime: '22:00' });
    }

    // Filtre : Ferme avant 18h ("18:00")
    if (closeEarly) {
      query.andWhere('pharmacy.closingTime < :earlyTime', { earlyTime: '18:00' });
    }

    return query.orderBy('distance', 'ASC').getRawMany(); 
  }

  // ==========================================
  // 3. CRUD MÉDICAMENTS & GESTION DES STOCKS
  // ==========================================

  async addMedicine(pharmacyId: number, medicineData: Partial<Medicine>): Promise<Medicine> {
    const pharmacy = await this.findOne(pharmacyId);
    const newMedicine = this.medicineRepository.create({
      ...medicineData,
      pharmacy,
    });
    return this.medicineRepository.save(newMedicine);
  }

  async findMedicinesByPharmacy(pharmacyId: number): Promise<Medicine[]> {
    const pharmacy = await this.findOne(pharmacyId);
    return this.medicineRepository.find({
      where: { pharmacy: { id: pharmacy.id } }
    });
  }

  async updateStock(medicineId: number, newStock: number): Promise<Medicine> {
    const medicine = await this.medicineRepository.findOne({ where: { id: medicineId } });
    if (!medicine) {
      throw new NotFoundException(`Médicament avec l'ID ${medicineId} introuvable`);
    }
    medicine.stock = newStock;
    return this.medicineRepository.save(medicine);
  }
}