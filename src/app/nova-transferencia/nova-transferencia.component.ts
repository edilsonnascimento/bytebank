import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.scss'],
})
export class NovaTransferenciaComponent {
  @Output() aoTransferir = new EventEmitter<any>();
  @Output() valoresComErro = new EventEmitter<string>();

  valor: number;
  destino: number;
  mensagemErro: string;

  transferir() {
    this.mensagemErro = "";
    if (this.isValido()) {
      const valorEmitir = { valor: this.valor, destino: this.destino };
      this.aoTransferir.emit(valorEmitir);
      this.limparCampos();
    }
    this.limparCampos();
  }

  isValido() {
    const valido = this.valor > 0;
    if(!valido){
      this.mensagemErro = 'Informe um valor válido';
    }
    this.valoresComErro.emit(this.mensagemErro);
    return valido;
  }

  limparCampos() {
    this.valor = 0;
    this.destino = 0;
  }
}
