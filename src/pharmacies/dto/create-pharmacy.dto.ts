import { IsNotEmpty, IsString, IsNumber, Matches } from 'class-validator';

export class CreatePharmacyDto {
  @IsNotEmpty({ message: "Le nom de la pharmacie est obligatoire." })
  @IsString({ message: "Le nom doit être une chaîne de caractères." })
  name: string;

  @IsNotEmpty({ message: "L'adresse est obligatoire." })
  @IsString({ message: "L'adresse doit être une chaîne de caractères." })
  address: string;

  @IsNotEmpty({ message: "La latitude est obligatoire." })
  @IsNumber({}, { message: "La latitude doit être un nombre décimal." })
  latitude: number;

  @IsNotEmpty({ message: "La longitude est obligatoire." })
  @IsNumber({}, { message: "La longitude doit être un nombre décimal." })
  longitude: number;

  @IsNotEmpty({ message: "L'heure d'ouverture est obligatoire." })
  @Matches(/^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/, {
    message: "L'heure d'ouverture doit être au format HH:MM (ex: 08:00).",
  })
  openingTime: string;

  @IsNotEmpty({ message: "L'heure de fermeture est obligatoire." })
  @Matches(/^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/, {
    message: "L'heure de fermeture doit être au format HH:MM (ex: 23:30).",
  })
  closingTime: string;
}