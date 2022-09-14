import { Component, Input} from '@angular/core';
import {Alumno, Seccion} from '../../modelo/alumno';
@Component({
  selector: 'app-formulario-alumno',
  templateUrl: './formulario-alumno.component.html',
  styleUrls: ['./formulario-alumno.component.scss']
})
export class FormularioAlumnoComponent {
  @Input() public alumno !: Array<Alumno>;

}
