import { Module } from '@nestjs/common';
import { NivelesAcademicosService } from './niveles_academicos.service';
import { NivelesAcademicosController } from './niveles_academicos.controller';

@Module({
  controllers: [NivelesAcademicosController],
  providers: [NivelesAcademicosService],
})
export class NivelesAcademicosModule {}
