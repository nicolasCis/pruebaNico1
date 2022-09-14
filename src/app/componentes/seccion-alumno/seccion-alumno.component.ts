import { Component, Input} from '@angular/core';
import {Seccion} from '../../modelo/seccion';
@Component({
  selector: 'app-seccion-alumno',
  templateUrl: './seccion-alumno.component.html',
  styleUrls: ['./seccion-alumno.component.scss']
})
export class SeccionAlumnoComponent  {
  @Input() public seccion !: Seccion;

}
