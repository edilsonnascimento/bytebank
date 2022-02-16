import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'bytebank';
  transferencias: any[] = [];
  mensagemErro: string;

  transferir($event){
    //captura as propriedades de $event e adiciona a propriedade data
    const transferencia = {...$event, data: new Date()};
    this.transferencias.push(transferencia);
  }

  exibirModalErro($event){
      this.mensagemErro = $event;
  }
}
