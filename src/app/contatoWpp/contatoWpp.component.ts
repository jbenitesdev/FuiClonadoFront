import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef, ModalOptions } from 'ngx-bootstrap/modal';
import { NumerosClonadosService } from '../service/numeros-clonados.service';
import { StoreService } from '../shared/store.service';
import { ModalMessageComponent } from '../modal-message/modal-message.component';

@Component({
  selector: 'app-contato-wpp',
  templateUrl: './contatoWpp.component.html',
  styleUrls: ['./contatoWpp.component.css']
})

export class ContatoWppComponent implements OnInit {
    mobile: boolean;
    modalRef: BsModalRef;
    modalConfig: ModalOptions = { class: 'modal-sm modal-dialog-centered' };

    isValid: boolean;

    constructor(private modalService: BsModalService,
                private numerosClonadosService: NumerosClonadosService,
                private storeService: StoreService) { }

    ngOnInit() {
        if (window.screen.width <= 400) {
            this.mobile = true;
        }

        this.getAccessToken();
    }

    openGoogleApi() {
        const clientId = '464781618950-f2b0bp5aubjdicbfj10kv7lqejv888vs.apps.googleusercontent.com';
        const redirectUrl = 'https://fuiclonadoarq.herokuapp.com/contatosApi';

        window.location.href = "https://accounts.google.com/o/oauth2/auth?redirect_uri="+redirectUrl+"&response_type=code&client_id=" + clientId + "&scope=https://www.google.com/m8/feeds/&approval_prompt=force&access_type=offline";
    }

    getAccessToken() {
        const urlParams = new URLSearchParams(window.location.search);
        const code = urlParams.get('code');

        if (urlParams && code && code !== '' && code !== undefined) {
            console.log('EXECUTANDO REQUEST DO TOKEN');
            this.isValid = true;
            const googleClientId = '464781618950-f2b0bp5aubjdicbfj10kv7lqejv888vs.apps.googleusercontent.com';
            const googleClientSceret = 'Y5I1R957rkEfpdviz8UiGcBC';
            const googleRedirectUrl = 'https://fuiclonadoarq.herokuapp.com/contatosApi';

            this.numerosClonadosService.getAccessToken(code, googleClientId, googleClientSceret, googleRedirectUrl).subscribe(res => {
                console.log('GET ATCCESS TOKEN: ', res);
                this.obterContatos(res.token_type, res.refresh_token, res.access_token);
            });
        } else {
            this.isValid = false;
        }
    }

    obterQueryString() {
        const urlParams = new URLSearchParams(window.location.search);
        const code = urlParams.get('code');
    }

    obterContatos(bearer: string, refreshTokenResp: string, accessTokenResp: string) {
        const refreshToken = refreshTokenResp;
        const accessToken = accessTokenResp;
        const scope = 'https://www.google.com/m8/feeds/contacts/default/full/';

        this.numerosClonadosService.getContatosGoogle(scope, bearer, accessToken).subscribe(respCon => {
            console.log('RESPONSE DOS CONTATOS: ', respCon.data);
            this.enviarSMS(this.obetNumerosPorContato(respCon.data))
        });
    }

    obetNumerosPorContato(contatos: any[]) {
        let telefonesContatos = []

        if (contatos && contatos.length > 0) {
            contatos.forEach(contato => {
                if (contato.hasOwnProperty('gd:phoneNumber')) {
                    let contatoObj = { nome: contato.title[0]._, telefones: [] }
                    let numeros = []
                    
                    contato['gd:phoneNumber'].forEach(numero => {
                        numeros.push(numero._)
                    });

                    contatoObj.telefones = numeros
                    telefonesContatos.push(contatoObj)
                }
            });
        }

        // console.log('VALOR DE TELEFONES: ', telefonesContatos)
        // this.numerosClonadosService.enviarMensagemParaWhatsapp().subscribe(msg => {
        //     console.log("MSG ENVIADA PARA WHATSAPP")
        // })

        return telefonesContatos
    }

    enviarSMS(contatos) {
        let telArray = []

        contatos.forEach(contato => {
            console.log("CONTATO: ", contato.nome)
            contato.telefones.forEach(tel => {
                console.log("TEL: ", tel)
                telArray.push(this.tratarNumeroTelefone(tel))
            });
        });

        console.log("TEL ARRAY: ", telArray)
        this.numerosClonadosService.enviarMensagemSMSOnly(telArray, 'Mensagem de teste do sistema FuiClonado, favor desconsiderar', window.location.href).subscribe(res => { console.log("Mensagens enviadas")});
    }

    tratarNumeroTelefone(numero) {
        let numeroTratado

        if (numero.indexOf('+55') > 0)
            numeroTratado = numero.replace(' ', '').replace(' ', '').replace('-', '')
        else
            numeroTratado = '+55' + numero.replace(' ', '').replace('-', '')
        
        return numeroTratado
    }

    onSubmit(form) {
        console.log('Enviou o e-mail');
    }
}
