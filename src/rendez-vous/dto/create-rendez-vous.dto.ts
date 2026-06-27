import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class CreateRendezVousDto {
  @IsNotEmpty()
  @IsString()
  nomPatient: string;

  @IsNotEmpty()
  @IsString()
  prenomPatient: string;

  @IsNotEmpty()
  @IsString()
  telephone: string;

  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsString()
  dateRendezVous: string;

  @IsNotEmpty()
  @IsString()
  heureRendezVous: string;

  @IsNotEmpty()
  @IsString()
  motif: string;

  @IsNotEmpty()
  @IsString()
  statut: string;
}
