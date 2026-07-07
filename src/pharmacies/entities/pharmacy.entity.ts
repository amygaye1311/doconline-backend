import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Medicine } from './medicine.entity';

@Entity('pharmacies')
export class Pharmacy {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  address: string;

  @Column({ type: 'decimal', precision: 10, scale: 7 })
  latitude: number;

  @Column({ type: 'decimal', precision: 10, scale: 7 })
  longitude: number;

  @Column()
  openingTime: string;

  @Column()
  closingTime: string;

  @OneToMany(() => Medicine, (medicine) => medicine.pharmacy)
  medicines: Medicine[];
}
