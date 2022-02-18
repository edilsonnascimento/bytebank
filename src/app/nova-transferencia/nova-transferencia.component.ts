import { Transferencia } from './../models/transferencia.model';
import { Component, Output, EventEmitter } from '@angular/core';
import { TransferenciaService } from '../service/transferencia.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.scss'],
})
export class NovaTransferenciaComponent {

  valor: number;
  destino: number;

  constructor(
    private service: TransferenciaService,
    private router: Router
  ) {}

  transferir() {
      const valorTransferir: Transferencia = {
        valor: this.valor,
        destino: this.destino,
      };

      this.service.adicionar(valorTransferir).subscribe((resultado) => {
        console.log(resultado);
        this.limparCampos();
        this.router.navigateByUrl('extrato');
      }, (error) => {
        console.log(error);
      });
  }

  limparCampos() {
    this.valor = 0;
    this.destino = 0;
  }
}
