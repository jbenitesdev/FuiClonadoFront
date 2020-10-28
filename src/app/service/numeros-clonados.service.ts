import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class NumerosClonadosService {

  constructor(private http: HttpClient) { }

  public salvarRegistro(nome: string, cpf: string,numero: string, email: string, termo: string): Observable<any> {
    return this.http.post<Observable<any>>('https://fuiclonadoapi.herokuapp.com/api/salvarRegistro', {nome: nome, cpf: cpf,numero: numero, email: email, termo: termo})
  }
}
