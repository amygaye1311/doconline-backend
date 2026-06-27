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

  // 🔗 LIAISON AVEC USER (PATIENT)
  @ManyToOne(() => User, (user) => user.rendezVous, { eager: true })
  user: User;
}
