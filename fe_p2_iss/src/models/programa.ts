import type { NivelAcademico } from './nivel-academico'

export type EstadoPrograma = 'En Planificación' | 'En curso' | 'Finalizado'
export type Area_conocimientoPrograma = 'En Derecho' | 'En Educacion' | 'En Ingenieria' | 'En Salud'

export interface Programa {
  id: number
  idNivelAcademico: number
  descripcion: string
  nombre: string
  version: number
  duracionMeses: number
  costo: number
  fechaInicio: Date
  estado: EstadoPrograma
  area_conocimiento: Area_conocimientoPrograma
  nivelAcademico?: NivelAcademico
}
