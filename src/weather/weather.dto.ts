import { ApiProperty } from '@nestjs/swagger';

export class WeatherDto {
  @ApiProperty({ example: 'Dakar' })
  city: string;

  @ApiProperty({ example: 26.8 })
  temp: number;

  @ApiProperty({ example: 'Nuages épais' })
  description: string;
}
