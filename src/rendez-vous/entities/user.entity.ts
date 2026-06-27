import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { RendezVous } from './rendez-vous.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  // 🔗 Relation : 1 user -> plusieurs rendez-vous
  @OneToMany(() => RendezVous, (rdv) => rdv.user)
  rendezVous: RendezVous[];
}
