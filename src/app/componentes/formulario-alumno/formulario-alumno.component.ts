import { Component, Input, Output, EventEmitter} from '@angular/core';
import {Alumno, Secciones} from '../../modelo/alumno';
import {Seccion} from '../../modelo/seccion';



@Component({
  selector: 'app-formulario-alumno',
  templateUrl: './formulario-alumno.component.html',
  styleUrls: ['./formulario-alumno.component.scss']
})
export class FormularioAlumnoComponent {
  @Input() public alumno !: Array<Alumno>;
  @Input() public secciones !: Array<Seccion>;
  @Output() public salvarAlumnos = new EventEmitter<Alumno>();

  public alumnos : Alumno = {
    rutAlumno:0,
    nombreAlumno:'',
    apellidoAlumno:'',
    edadAlumno:0,
    seccionAlumno:'Programacion'
  }


  public seccion : Seccion = {
    idSeccion:0,
    nombreSeccion:''

  }


  public rutAlumno(evento:Event):void{
    const elemento0 = evento.target as HTMLInputElement;
    this.alumnos.rutAlumno = Number.parseInt(elemento0.value);
  }

  public nombreAlumno(evento:Event):void{
    const elemento1 = evento.target as HTMLInputElement;
    this.alumnos.nombreAlumno = elemento1.value;
  }

  public apellidoAlumno(evento:Event):void{
    const elemento2 = evento.target as HTMLInputElement;
    this.alumnos.apellidoAlumno = elemento2.value;
  }

  public edadAlumno(evento:Event):void{
    const elemento3 = evento.target as HTMLInputElement;
    this.alumnos.edadAlumno = Number.parseInt(elemento3.value);
  }



}
