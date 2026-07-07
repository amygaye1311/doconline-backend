import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Delete,
} from '@nestjs/common';
import { HospitalsService } from './hospitals.service';
import { CreateHospitalDto } from './dto/hospital.dto';
import { UpdateHospitalDto } from './dto/update-hospital.dto';

@Controller('hospitals')
export class HospitalsController {
  constructor(private readonly hospitalsService: HospitalsService) {}

  @Post()
  create(@Body() data: CreateHospitalDto) {
    return this.hospitalsService.create(data);
  }

  @Get()
  findAll() {
    return this.hospitalsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.hospitalsService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() data: UpdateHospitalDto) {
    return this.hospitalsService.update(id, data);
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.hospitalsService.delete(id);
  }
}
