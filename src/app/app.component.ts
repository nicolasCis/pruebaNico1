import { Component, Input } from '@angular/core';
import {Alumno} from './modelo/alumno';
import {Seccion} from './modelo/seccion';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @Input() public seccion : Array<Seccion>=[];

  public guardarAlumnos(nuevo:Alumno):void{
    this.listarAlumno.push(nuevo);
  }

  public listarAlumno : Array<Alumno>=[
    {
      rutAlumno:0,
      nombreAlumno:'',
      apellidoAlumno:'',
      edadAlumno:0,
      seccionAlumno:'Programacion'
    }
  ]


  public listarSeccion : Array<Seccion>=[
    {
      idSeccion:0,
      nombreSeccion:''
    }
  ]

  public guardarSeccion(nuevo:Seccion):void{
    this.listarSeccion.push(nuevo);
  }


}
