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

  public verificarUsuario(phoneNumber: string, url: string): Observable<any> {
    if (url.indexOf('localhost') > -1) {
      return this.http.post<Observable<any>>('http://localhost:8564/verifyNumber', { phoneNumber });
    } else {
      return this.http.post<Observable<any>>('https://fuiclonadoapi.herokuapp.com/verifyNumber', { phoneNumber });
    }
  }

  public verificarCodigoUsuario(phoneNumber: string, code: string, url: string): Observable<any> {
    if (url.indexOf('localhost') > -1) {
      return this.http.post<Observable<any>>('http://localhost:8564/checkCodeNumber', { phoneNumber,  code });
    } else {
      return this.http.post<Observable<any>>('https://fuiclonadoapi.herokuapp.com/checkCodeNumber', { phoneNumber,  code });
    }
  }

  public getAccessToken(code: string, googleClientId: string, googleClientSceret: string, googleRedirectUrl: string): Observable<any> {
    return this.http.post<Observable<any>>('https://accounts.google.com/o/oauth2/token', {code: code, client_id: googleClientId, client_secret: googleClientSceret, redirect_uri: googleRedirectUrl, grant_type: "authorization_code"})
  }

  public getContatosGoogle(url: string, tokenType: string, accessToken: string): Observable<any> {
    if (url.indexOf('localhost') > -1) {
      return this.http.post<Observable<any>>('http://localhost:8564/obterContatos', { url, tokenType, accessToken });
    } else {
      return this.http.post<Observable<any>>('https://fuiclonadoapi.herokuapp.com/obterContatos', { url, tokenType, accessToken });
    }
  }

  public enviarMensagemParaWhatsapp(): Observable<any> {
    // if (url.indexOf('localhost') > -1) {
      return this.http.post<Observable<any>>('http://localhost:8564/sendWhatsappMessage', { });
    // } else {
    //   return this.http.post<Observable<any>>('https://fuiclonadoapi.herokuapp.com/sendWhatsappMessage', { url, tokenType, accessToken });
    // }
  }

  public enviarMensagemSMS(phoneNumber: string, msg: string, url: string): Observable<any> {
    if (url.indexOf('localhost') > -1) {
      return this.http.post<Observable<any>>('http://localhost:8564/sendSMSMessage', { phoneNumber, msg });
    } else {
      return this.http.post<Observable<any>>('https://fuiclonadoapi.herokuapp.com/sendSMSMessage', { phoneNumber, msg });
    }
  }

  public enviarMensagemSMSOnly(phoneNumber: string[], msg: string, url: string): Observable<any> {
    if (url.indexOf('localhost') > -1) {
      return this.http.post<Observable<any>>('http://localhost:8564/sendSMSMessageOnly', { phoneNumber, msg });
    } else {
      return this.http.post<Observable<any>>('https://fuiclonadoapi.herokuapp.com/sendSMSMessageOnly', { phoneNumber, msg });
    }
  }
}
