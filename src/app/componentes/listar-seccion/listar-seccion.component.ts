import { Component, Input} from '@angular/core';
import { Seccion } from '../../modelo/seccion';
@Component({
  selector: 'app-listar-seccion',
  templateUrl: './listar-seccion.component.html',
  styleUrls: ['./listar-seccion.component.scss']
})
export class ListarSeccionComponent {
  @Input() public listaSeccion !: Array<Seccion>;

}
