import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef, ModalOptions } from 'ngx-bootstrap/modal';
import { NumerosClonadosService } from '../service/numeros-clonados.service';
import { StoreService } from '../shared/store.service';
import { ModalMessageComponent } from '../modal-message/modal-message.component';

@Component({
  selector: 'app-contatoWpp',
  templateUrl: './contatoWpp.component.html',
  styleUrls: ['./contatoWpp.component.css']
})

export class ContatoWppComponent implements OnInit {
    modalRef: BsModalRef;
    modalConfig: ModalOptions = { class: 'modal-sm modal-dialog-centered' };

    constructor(private modalService: BsModalService,
                private numerosClonadosService: NumerosClonadosService,
                private storeService: StoreService) { }

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
            const googleClientId = '464781618950-f2b0bp5aubjdicbfj10kv7lqejv888vs.apps.googleusercontent.com';
            const googleClientSceret = 'Y5I1R957rkEfpdviz8UiGcBC';
            const googleRedirectUrl = 'https://fuiclonadoarq.herokuapp.com/contatosApi';

            this.numerosClonadosService.getAccessToken(code, googleClientId, googleClientSceret, googleRedirectUrl).subscribe(res => {
                console.log('GET ATCCESS TOKEN: ', res);
                this.obterContatos(res.token_type, res.refresh_token, res.access_token);
            });
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

        this.numerosClonadosService.getContatos(bearer, scope, accessToken, refreshToken).subscribe(respCon => {
            console.log('RESPONSE DOS CONTATOS: ', respCon);
        });
    }

    ngOnInit() {
        this.getAccessToken();
    }
}
