export type Secciones = 'BaseDeDatos' |'Programacion'

export interface Alumno {
  rutAlumno:Number,
  nombreAlumno:String,
  apellidoAlumno:String,
  edadAlumno:Number,
  seccionAlumno:Secciones
}
