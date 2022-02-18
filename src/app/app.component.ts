import { Component } from '@angular/core';
import { TransferenciaService } from './service/transferencia.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'bytebank';
  mensagemErro: string = "";

  //injetando service
  constructor(private service: TransferenciaService){}

  exibirModalErro($event){
      this.mensagemErro = $event;
  }
}
