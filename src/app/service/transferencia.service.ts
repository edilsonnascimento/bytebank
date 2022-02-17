import { Transferencia } from '../models/transferencia.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

//Instancia gerenciada pelo Angular
@Injectable({
  providedIn: 'root',
})
export class TransferenciaService {
  private transferencias: any[];
  private URL = 'http://localhost:3000/transferencias';

  constructor(private httpClient: HttpClient) {
    this.transferencias = [];
  }

  get getTransferencias() {
    return this.transferencias;
  }

  getWSTransferencias(): Observable<Transferencia[]>{
    return this.httpClient.get<Transferencia[]>(this.URL);
  }

  adicionar(transferencia: any) {
    this.adicionarData(transferencia);
    this.transferencias.push(transferencia);
  }

  private adicionarData(transferencia: any) {
    transferencia.data = new Date();
  }
}
