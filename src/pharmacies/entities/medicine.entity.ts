import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Pharmacy } from './pharmacy.entity';

@Entity('medicines')
export class Medicine {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string; // Nom du médicament (ex: Paracétamol)

  @Column()
  category: string;

  @Column({ type: 'int', default: 0 })
  stock: number; // Champ stock demandé pour la gestion des stocks

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  price: number;

  // Relation inverse : Le médicament appartient à une pharmacie (ManyToOne)
  @ManyToOne(() => Pharmacy, (pharmacy) => pharmacy.medicines, { onDelete: 'CASCADE' })
  pharmacy: Pharmacy;
}