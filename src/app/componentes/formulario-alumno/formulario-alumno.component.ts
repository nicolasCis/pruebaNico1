import { Component, Input} from '@angular/core';
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

}
