import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { User } from './user.entity';

@Entity()
export class RendezVous {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nomPatient: string;

  @Column()
  prenomPatient: string;

  @Column()
  telephone: string;

  @Column()
  email: string;

  @Column()
  dateRendezVous: string;

  @Column()
  heureRendezVous: string;

  @Column()
  motif: string;

  @Column()
  statut: string;

  @Column({ nullable: true })
  age: number;

  @Column({ nullable: true })
  hopital: string;

  @Column({ nullable: true })
  specialiste: string;

  @Column({ nullable: true })
  notes: string;

  @ManyToOne(() => User, (user) => user.rendezVous, { eager: true })
  user: User;
}
