import { Injectable } from '@nestjs/common';
import { CreateNivelesAcademicoDto } from './dto/create-niveles_academico.dto';
import { UpdateNivelesAcademicoDto } from './dto/update-niveles_academico.dto';

@Injectable()
export class NivelesAcademicosService {
  create(createNivelesAcademicoDto: CreateNivelesAcademicoDto) {
    return 'This action adds a new nivelesAcademico';
  }

  findAll() {
    return `This action returns all nivelesAcademicos`;
  }

  findOne(id: number) {
    return `This action returns a #${id} nivelesAcademico`;
  }

  update(id: number, updateNivelesAcademicoDto: UpdateNivelesAcademicoDto) {
    return `This action updates a #${id} nivelesAcademico`;
  }

  remove(id: number) {
    return `This action removes a #${id} nivelesAcademico`;
  }
}
