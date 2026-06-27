import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
  UseGuards,
  Request,
} from '@nestjs/common';

import { RendezVousService } from './rendez-vous.service';
import { CreateRendezVousDto } from './dto/create-rendez-vous.dto';
import { UpdateRendezVousDto } from './dto/update-rendez-vous.dto';

import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('rendez-vous')
export class RendezVousController {
  constructor(private readonly rendezVousService: RendezVousService) {}

  // 🔐 CREATE (protégé)
  @UseGuards(JwtAuthGuard)
  @Post()
  create(@Body() dto: CreateRendezVousDto, @Request() req: any) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    return this.rendezVousService.create(dto, req.user.id);
  }

  // 🔐 GET ALL (protégé)
  @UseGuards(JwtAuthGuard)
  @Get()
  findAll() {
    return this.rendezVousService.findAll();
  }

  // 🔐 GET ONE (protégé)
  @UseGuards(JwtAuthGuard)
  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.rendezVousService.findOne(id);
  }

  // 🔐 UPDATE (protégé)
  @UseGuards(JwtAuthGuard)
  @Put(':id')
  update(@Param('id') id: string, @Body() dto: UpdateRendezVousDto) {
    return this.rendezVousService.update(+id, dto);
  }

  // 🔐 DELETE (protégé)
  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.rendezVousService.remove(+id);
  }
}
