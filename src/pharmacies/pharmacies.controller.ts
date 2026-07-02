import { Controller, Get, Post, Put, Patch, Delete, Body, Param, Query, ParseIntPipe, ParseFloatPipe } from '@nestjs/common';
import { PharmaciesService } from './pharmacies.service';
import { Pharmacy } from './entities/pharmacy.entity';
import { Medicine } from './entities/medicine.entity';

@Controller('pharmacies')
export class PharmaciesController {
  constructor(private readonly pharmaciesService: PharmaciesService) {}

  @Post()
  create(@Body() pharmacyData: Partial<Pharmacy>) {
    return this.pharmaciesService.create(pharmacyData);
  }

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

  @Get()
  findAll() {
    return this.pharmaciesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.pharmaciesService.findOne(id);
  }

  @Put(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() updateData: Partial<Pharmacy>) {
    return this.pharmaciesService.update(id, updateData);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.pharmaciesService.remove(id);
  }

  @Post(':id/medicines')
  addMedicine(@Param('id', ParseIntPipe) id: number, @Body() medicineData: Partial<Medicine>) {
    return this.pharmaciesService.addMedicine(id, medicineData);
  }

  @Get(':id/medicines')
  findMedicinesByPharmacy(@Param('id', ParseIntPipe) id: number) {
    return this.pharmaciesService.findMedicinesByPharmacy(id);
  }

  @Patch('/../medicines/:id/stock') 
  updateStock(
    @Param('id', ParseIntPipe) id: number,
    @Body('stock', ParseIntPipe) stock: number,
  ) {
    return this.pharmaciesService.updateStock(id, stock);
  }
}