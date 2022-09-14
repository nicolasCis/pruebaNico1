import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Secciones } from 'src/app/modelo/alumno';
import{Seccion} from '../../modelo/seccion';
@Component({
  selector: 'app-formulario-seccion',
  templateUrl: './formulario-seccion.component.html',
  styleUrls: ['./formulario-seccion.component.scss']
})
export class FormularioSeccionComponent {
  @Output() public salvar = new EventEmitter<Seccion>();
  @Input() public seccione !: Array<Seccion>;

  public seccion : Seccion={
    idSeccion:0,
    nombreSeccion:''
  }

  public ingresarId(evento:Event):void{
    const elemento0 = evento.target as HTMLInputElement;
    this.seccion.idSeccion = Number.parseInt(elemento0.value);
  }

  public nombreSeccion(evento:Event):void{
    const elemento1 = evento.target as HTMLInputElement;
    this.seccion.nombreSeccion = elemento1.value;
  }

  public guardar(evento:Event):void{
    const copia : Seccion = {...this.seccion};
    this.salvar.emit(copia);
  }

}
