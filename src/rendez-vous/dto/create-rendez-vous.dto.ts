import {
  IsEmail,
  IsNotEmpty,
  IsString,
  IsOptional,
  IsNumber,
} from 'class-validator';

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
  @IsOptional()
  email?: string;

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

  @IsNumber()
  @IsOptional()
  age?: number;

  @IsString()
  @IsOptional()
  hopital?: string;

  @IsString()
  @IsOptional()
  specialiste?: string;

  @IsString()
  @IsOptional()
  notes?: string;
}
