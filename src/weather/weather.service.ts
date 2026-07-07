import { Injectable, HttpException, HttpStatus } from '@nestjs/common';

@Injectable()
export class WeatherService {
  // Clé d'API gratuite OpenWeather (Idéalement à mettre dans un fichier .env)
  private readonly apiKey = 'VOTRE_CLE_OPENWEATHER'; 

  async getWeatherByCoordinates(lat: number, lon: number) {
    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${this.apiKey}&units=metric&lang=fr`;
      
      const response = await fetch(url);
      
      if (!response.ok) {
        throw new HttpException("Impossible de récupérer la météo", HttpStatus.BAD_REQUEST);
      }

      const data = await response.json();
      
      // On extrait proprement uniquement ce qui intéresse le frontend
      return {
        temperature: data.main.temp,
        description: data.weather[0].description,
        humidity: data.main.humidity,
        icon: data.weather[0].icon,
      };
    } catch (error) {
      throw new HttpException("Erreur lors de l'appel à l'API externe", HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}