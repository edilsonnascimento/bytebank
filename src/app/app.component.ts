import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'bytebank';
  transferencia: any;
  mensagemErro: string;

  transferir($event){
    console.log($event);
    this.transferencia = $event;
  }

  exibirModalErro($event){
      this.mensagemErro = $event;
  }
}
