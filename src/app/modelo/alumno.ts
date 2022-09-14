export type Seccion = 'BaseDeDatos' |'Programacion'

export interface Alumno {
  rutAlumno:Number,
  nombreAlumno:String,
  apellidoAlumno:String,
  edadAlumno:Number,
  seccionAlumno:Seccion
}
