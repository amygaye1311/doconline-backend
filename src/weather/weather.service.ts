import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';
import { WeatherDto } from './weather.dto';
import { WeatherResponse } from './weather-response.interface';

@Injectable()
export class WeatherService {
  constructor(private readonly httpService: HttpService) {}

  async getWeather(city: string): Promise<WeatherDto> {
    try {
      const apiKey = process.env.OPENWEATHER_API_KEY;
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

      // ✅ Pas besoin de typer AxiosResponse ici
      const response = await firstValueFrom(
        this.httpService.get<WeatherResponse>(url),
      );

      // ✅ Cast explicite pour éviter l’erreur TS
      const data = response.data;

      return {
        city: data.name,
        temp: data.main.temp,
        description: data.weather[0].description,
      };
    } catch (error: any) {
      // ✅ Typage explicite de error
      throw new Error(
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        `Impossible de récupérer la météo pour ${city} : ${error.message}`,
      );
    }
  }
}
