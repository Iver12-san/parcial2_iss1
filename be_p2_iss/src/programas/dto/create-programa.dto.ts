import { ApiProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import {
  IsDateString,
  IsDefined,
  IsEnum,
  IsInt,
  IsNotEmpty,
  IsNumber,
  IsString,
  MaxLength,
} from 'class-validator';

export class CreateProgramaDto {
  @ApiProperty()
  @IsDefined({ message: 'El campo id del nivel academico debe estar definido' })
  @IsInt({ message: 'El campo id del nivel academico debe ser numérico' })
  idNivelAcademico: number;

  @ApiProperty()
  @IsNotEmpty({ message: 'El campo nombre no debe estar vacío' })
  @IsString({ message: 'El campo nombre debe ser de tipo cadena' })
  @MaxLength(100, {
    message: 'El campo nombre no debe exceder los 100 caracteres',
  })
  @Transform(({ value }): string | undefined =>
    typeof value === 'string' ? value.trim() : value,
  )
  nombre: string;

  @ApiProperty()
  @IsNotEmpty({ message: 'El campo descripcion no debe estar vacío' })
  @IsString({ message: 'El campo descripcion debe ser de tipo cadena' })
  @MaxLength(2000, {
    message: 'El campo descripcion no debe exceder los 2000 caracteres',
  })
  @Transform(({ value }): string | undefined =>
    typeof value === 'string' ? value.trim() : value,
  )
  descripcion: string;

  @ApiProperty()
  @IsNotEmpty({ message: 'El campo version no debe estar vacío' })
  @IsInt({ message: 'El campo version debe ser numérico' })
  version: number;

  @ApiProperty()
  @IsNotEmpty({ message: 'El campo duracion meses no debe estar vacío' })
  @IsInt({ message: 'El campo duracion meses debe ser numérico' })
  duracionMeses: number;

  @ApiProperty()
  @IsDefined({ message: 'El campo fecha de inicio debe estar definido' })
  @IsDateString(
    {},
    { message: 'El campo fecha de inicio debe ser una fecha válida' },
  )
  fechaInicio: Date;

  @ApiProperty({
    description: 'Costo del nivel académico en formato decimal',
    example: 1250.5,
  })
  @IsNotEmpty({ message: 'El campo costo no debe estar vacío' })
  @IsNumber(
    { maxDecimalPlaces: 2 },
    { message: 'El campo costo debe ser un número decimal válido' },
  )
  @Transform(({ value }) => parseFloat(value))
  costo: number;

  // 👉 estado: cadena de 20 caracteres. enum ('En Planificación', 'En curso', 'Finalizado'), campo obligatorio
  @ApiProperty({
    description:
      'Estado actual del nivel académico. Valores permitidos: En Planificación, En curso, Finalizado',
    enum: ['En Planificación', 'En curso', 'Finalizado'],
    example: 'En curso',
  })
  @IsNotEmpty({ message: 'El campo estado no debe estar vacío' })
  @IsEnum(['En Planificación', 'En curso', 'Finalizado'], {
    message:
      'El campo estado solo puede tener los valores: En Planificación, En curso o Finalizado',
  })
  @Transform(({ value }): string | undefined =>
    typeof value === 'string' ? value.trim() : value,
  )
  estado: string;

  @ApiProperty({
    description:
      'Área de conocimiento actual del programa. Valores permitidos: En Derecho, En Educacion, En Ingenieria, En Salud',
    enum: ['En Derecho', 'En Educacion', 'En Ingenieria', 'En Salud'],
    example: 'En Salud',
  })
  @IsNotEmpty({
    message: 'El campo área de conocimiento no debe estar vacío',
  })
  @IsEnum(['En Derecho', 'En Educacion', 'En Ingenieria', 'En Salud'], {
    message:
      'El campo área de conocimiento solo puede tener los valores: En Derecho, En Educacion, En Ingenieria o En Salud',
  })
  @Transform(({ value }): string | undefined =>
    typeof value === 'string' ? value.trim() : value,
  )
  area_conocimiento: string;
}
