import { Controller, Get, Post, Put, Patch, Delete, Body, Param, Query, ParseIntPipe, ParseFloatPipe } from '@nestjs/common';
import { PharmaciesService } from './pharmacies.service';
import { Pharmacy } from './entities/pharmacy.entity';
import { Medicine } from './entities/medicine.entity';
import { CreatePharmacyDto } from './dto/create-pharmacy.dto'; 
import { WeatherService } from '../weather/weather.service'; // Importation du service météo

@Controller('pharmacies')
export class PharmaciesController {
  // Injection des deux services requis
  constructor(
    private readonly pharmaciesService: PharmaciesService,
    private readonly weatherService: WeatherService, 
  ) {}

  // 1. Créer une pharmacie (Sécurisé avec le DTO)
  @Post()
  create(@Body() createPharmacyDto: CreatePharmacyDto) {
    return this.pharmaciesService.create(createPharmacyDto);
  }

  // 2. Rechercher des pharmacies à proximité (Géolocalisation)
  @Get('nearby')
  findNearby(
    @Query('lat', ParseFloatPipe) lat: number,
    @Query('lng', ParseFloatPipe) lng: number,
    @Query('radius', ParseFloatPipe) radius: number,
    @Query('openLate') openLate?: string,
    @Query('closeEarly') closeEarly?: string,
  ) {
    const isOpenLate = openLate === 'true';
    const isCloseEarly = closeEarly === 'true';
    return this.pharmaciesService.findNearby(lat, lng, radius, isOpenLate, isCloseEarly);
  }

  // 3. Récupérer la météo en temps réel d'une pharmacie spécifique (Consommation API Externe)
  @Get(':id/weather')
  async getPharmacyWeather(@Param('id', ParseIntPipe) id: number) {
    // Récupération de la pharmacie pour obtenir ses coordonnées géographiques uniques
    const pharmacy = await this.pharmaciesService.findOne(id);
    
    // Appel au service météo avec la latitude et la longitude de la pharmacie
    return this.weatherService.getWeatherByCoordinates(pharmacy.latitude, pharmacy.longitude);
  }

  // 4. Lister toutes les pharmacies
  @Get()
  findAll() {
    return this.pharmaciesService.findAll();
  }

  // 5. Récupérer une seule pharmacie par son ID
  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.pharmaciesService.findOne(id);
  }

  // 6. Modifier une pharmacie (Sécurisé avec le DTO partiel)
  @Put(':id')
  update(
    @Param('id', ParseIntPipe) id: number, 
    @Body() updatePharmacyDto: Partial<CreatePharmacyDto>
  ) {
    return this.pharmaciesService.update(id, updatePharmacyDto);
  }

  // 7. Supprimer une pharmacie
  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.pharmaciesService.remove(id);
  }

  // 8. Ajouter un médicament à une pharmacie spécifique
  @Post(':id/medicines')
  addMedicine(@Param('id', ParseIntPipe) id: number, @Body() medicineData: Partial<Medicine>) {
    return this.pharmaciesService.addMedicine(id, medicineData);
  }

  // 9. Lister tous les médicaments d'une pharmacie spécifique
  @Get(':id/medicines')
  findMedicinesByPharmacy(@Param('id', ParseIntPipe) id: number) {
    return this.pharmaciesService.findMedicinesByPharmacy(id);
  }

  // 10. Mettre à jour le stock d'un médicament particulier
  @Patch(':id/stock') 
  updateStock(
    @Param('id', ParseIntPipe) id: number,
    @Body('stock', ParseIntPipe) stock: number,
  ) {
    return this.pharmaciesService.updateStock(id, stock);
  }
}