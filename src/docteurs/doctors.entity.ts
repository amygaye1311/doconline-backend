import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Hospital } from '../hospitals/hospitals.entity';

@Entity('doctors')
export class Doctor {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  speciality: string;

  @Column()
  phone: string;

  @Column()
  email: string;

  @ManyToOne(() => Hospital, (hospital) => hospital.doctors)
  @JoinColumn({ name: 'hospital_id' })
  hospital: Hospital;
}