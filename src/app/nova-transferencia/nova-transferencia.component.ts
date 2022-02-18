import { Transferencia } from './../models/transferencia.model';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, Output, EventEmitter } from '@angular/core';
import { TransferenciaService } from '../service/transferencia.service';

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

  constructor(private service: TransferenciaService) {}

  transferir() {
    this.mensagemErro = '';
    if (this.isValido()) {
      const valorTransferir: Transferencia = {
        valor: this.valor,
        destino: this.destino,
      };

      this.service.adicionar(valorTransferir).subscribe((resultado) => {
        console.log(resultado);
        this.limparCampos();
      }, (error) => {
        console.log(error);
      });

      this.limparCampos();
    }
    this.limparCampos();
  }

  isValido() {
    const valido = this.valor > 0;
    if (!valido) {
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
