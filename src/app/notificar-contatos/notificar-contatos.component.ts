import { Component, OnDestroy } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { StoreService } from '../shared/store.service';

@Component({
  selector: 'app-notificar-contatos',
  templateUrl: './notificar-contatos.component.html',
  styleUrls: ['./notificar-contatos.component.css']
})
export class NotificarContatosComponent implements OnDestroy {
  constructor(public storeService: StoreService) {  }

  notificarContatos(msg: string) {
    this.openGoogleApi();
    console.log(msg);

  }

  openGoogleApi() {
    const clientId = '464781618950-f2b0bp5aubjdicbfj10kv7lqejv888vs.apps.googleusercontent.com';
    const redirectUrl = 'https://fuiclonadoarq.herokuapp.com/contatosApi';

    window.location.href = "https://accounts.google.com/o/oauth2/auth?redirect_uri="+redirectUrl+"&response_type=code&client_id=" + clientId + "&scope=https://www.google.com/m8/feeds/&approval_prompt=force&access_type=offline";
  }

  resetValues() {
    this.storeService.registroUsuario = {};
    this.storeService.modalEnviarError = false;
    this.storeService.modalBuscarNumeroError = false;
    this.storeService.modalBuscarNumeroValue = '';
    this.storeService.modalBuscarMsg = '';
    this.storeService.numeroTelefone = '';
    this.storeService.notificarContatos = false;
  }

  onSubmit(form) {
    console.log('Enviou o e-mail');
  }

  ngOnDestroy() {
    this.resetValues();
  }
}
