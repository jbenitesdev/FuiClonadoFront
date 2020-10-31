import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class NumerosClonadosService {

  constructor(private http: HttpClient) { }

  public salvarRegistro(nome: string, cpf: string, numero: string, email: string, termo: string, url: string): Observable<any> {
    if (url.indexOf('localhost') > -1) {
      return this.http.post<Observable<any>>('http://localhost:8564/numeroClonado', { nome,  cpf, numero,  email, termo });
    } else {
      return this.http.post<Observable<any>>('https://fuiclonadoapi.herokuapp.com/numeroClonado', { nome, cpf, numero, email, termo });
    }
  }

  public buscarNumero(numero: string, url: string): Observable<any> {
    if (url.indexOf('localhost') > -1) {
      return this.http.get<Observable<any>>(`http://localhost:8564/numeroClonado/${numero}`);
    } else {
      return this.http.get<Observable<any>>(`https://fuiclonadoapi.herokuapp.com/numeroClonado/${numero}`);
    }
  }

  public enviarEmail(from: string, subject: string, msg: string, url: string): Observable<any> {
    if (url.indexOf('localhost') > -1) {
      return this.http.post<Observable<any>>('http://localhost:8564/sendMail', { from,  subject, msg });
    } else {
      return this.http.post<Observable<any>>('https://fuiclonadoapi.herokuapp.com/sendMail', { from,  subject, msg });
    }
  }

  public getAccessToken(code: string, googleClientId: string, googleClientSceret: string, googleRedirectUrl: string): Observable<any> {
    return this.http.post<Observable<any>>('https://accounts.google.com/o/oauth2/token', {code: code, client_id: googleClientId, client_secret: googleClientSceret, redirect_uri: googleRedirectUrl, grant_type: "authorization_code"})
  }

  public getContatos(tokenType: string, scope: string, accessToken: string, refreshToken: string): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    headers.append('Access-Control-Allow-Origin', '*' );
    headers.append('Authorization', `${tokenType} ${accessToken}`)

    return this.http.get<Observable<any>>(`${scope}`, { headers });
  }
}

// return this.http.get<Observable<any>>(`${scope}`, {
//   headers: { 'Authorization': `${tokenType} ${accessToken}`,
//   'responseType': 'text'},
// });
