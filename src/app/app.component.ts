import { Component } from '@angular/core';
import { TransferenciaService } from './service/transferencia.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'bytebank';
  transferencias: any[] = [];
  mensagemErro: string = "";

  //injetando service
  constructor(private service: TransferenciaService){

  }

  transferir($event){
    //captura as propriedades de $event e adiciona a propriedade data
    const transferencia = {...$event, data: new Date()};
    this.transferencias.push(transferencia);
  }

  exibirModalErro($event){
      this.mensagemErro = $event;
  }
}
