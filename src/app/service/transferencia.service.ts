import { Transferencia } from '../models/transferencia.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Injectable({
  providedIn: 'root',
})
export class TransferenciaService {
  private transferencias: Transferencia[];
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

  adicionar(transferencia: Transferencia): Observable<Transferencia> {
    this.adicionarData(transferencia);
    return this.httpClient.post<Transferencia>(this.URL, transferencia);
  }

  private adicionarData(transferencia: Transferencia) {
    transferencia.data = new Date();
  }
}
