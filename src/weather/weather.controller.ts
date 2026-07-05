import { Controller, Get, Query } from '@nestjs/common';

@Controller('meteo')
export class WeatherController {
  @Get()
  getWeather(@Query('city') city: string) {
    const normalized = (city || '').toLowerCase().trim();

    const weatherByCity: Record<string, { temperature: number; description: string }> = {
      'dakar': { temperature: 30, description: 'Ensoleillé avec quelques nuages' },
      'paris': { temperature: 18, description: 'Couvert avec averses légères' },
      'lyon': { temperature: 16, description: 'Nuageux' },
      'marseille': { temperature: 22, description: 'Ensoleillé' },
      'bordeaux': { temperature: 19, description: 'Partiellement nuageux' },
      'lille': { temperature: 14, description: 'Pluie légère' },
      'strasbourg': { temperature: 15, description: 'Brumeux' },
      'toulouse': { temperature: 21, description: 'Ensoleillé' },
      'nice': { temperature: 24, description: 'Ciel dégagé' },
      'nantes': { temperature: 17, description: 'Nuageux avec averses' },
    };

    const data = weatherByCity[normalized] || { temperature: 28, description: 'Ensoleillé avec quelques nuages' };

    return {
      city,
      ...data,
    };
  }
}
