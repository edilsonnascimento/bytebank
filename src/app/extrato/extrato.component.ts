import { Transferencia } from '../models/transferencia.model';
import { Observable } from 'rxjs';
import { Component, Input, OnInit } from '@angular/core';
import { TransferenciaService } from '../service/transferencia.service';

@Component({
  selector: 'app-extrato',
  templateUrl: './extrato.component.html',
  styleUrls: ['./extrato.component.scss'],
})
export class ExtratoComponent implements OnInit {
  transferencias: any[];

  constructor(private service: TransferenciaService) {}

  ngOnInit() {
    this.service
      .getWSTransferencias()
      .subscribe((transferencias: Transferencia[]) => {
        console.table(transferencias);
        this.transferencias = transferencias;
      });
  }
}
