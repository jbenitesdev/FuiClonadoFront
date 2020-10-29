import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class NumerosClonadosService {

  constructor(private http: HttpClient) { }

  public salvarRegistro(nome: string, cpf: string, numero: string, email: string, termo: string, url: string): Observable<any> {
    if (url.indexOf('localhost') > -1) {
      return this.http.post<Observable<any>>('http://localhost:8564/numeroClonado', { nome,  cpf, numero,  email, termo});
    } else {
      return this.http.post<Observable<any>>('https://fuiclonadoapi.herokuapp.com/numeroClonado', { nome, cpf, numero, email, termo});
    }
  }

  public buscarNumero(numero: string, url: string): Observable<any> {
    if (url.indexOf('localhost') > -1) {
      return this.http.get<Observable<any>>(`http://localhost:8564/numeroClonado/${numero}`);
    } else {
      return this.http.get<Observable<any>>(`http://fuiclonadoapi.herokuapp.com/numeroClonado/${numero}`);
    }
  }
}
