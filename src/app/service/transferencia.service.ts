import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

//Instancia gerenciada pelo Angular
@Injectable({
  providedIn: 'root',
})
export class TransferenciaService {
  private transferencias: any[];

  constructor(private httpClient: HttpClient) {
    this.transferencias = [];
  }

  get getTransferencias() {
    return this.transferencias;
  }

  adicionar(transferencia: any) {
    this.adicionarData(transferencia);
    this.transferencias.push(transferencia);
  }

  private adicionarData(transferencia: any) {
    transferencia.data = new Date();
  }
}
