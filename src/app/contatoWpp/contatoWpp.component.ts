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
        let clientId = "464781618950-f2b0bp5aubjdicbfj10kv7lqejv888vs.apps.googleusercontent.com";
        let redirectUrl = "https://fuiclonadoarq.herokuapp.com/contatosApi";

        window.location.href = "https://accounts.google.com/o/oauth2/auth?redirect_uri="+redirectUrl+"&response_type=code&client_id=" + clientId + "&scope=https://www.google.com/m8/feeds/&approval_prompt=force&access_type=offline";
    }

    getAccessToken()
    {
        const urlParams = new URLSearchParams(window.location.search);
        const code = urlParams.get('code');

        if (urlParams && code && code !== '' && code !== undefined) {
            console.log("EXECUTANDO REQUEST DO TOKEN")
            let googleClientId = "464781618950-f2b0bp5aubjdicbfj10kv7lqejv888vs.apps.googleusercontent.com";
            let googleClientSceret = "Y5I1R957rkEfpdviz8UiGcBC";
            let googleRedirectUrl = "https://fuiclonadoarq.herokuapp.com/contatosApi";
            
            this.numerosClonadosService.getAccessToken(code, googleClientId, googleClientSceret, googleRedirectUrl).subscribe(res => {
                console.log("RES: ", res);
                this.obterContatos(res.refresh_token, res.access_token)
            })
        }
    }

    obterQueryString() {
        const urlParams = new URLSearchParams(window.location.search);
        const code = urlParams.get('code');
    }

    obterContatos(refreshTokenResp: string, accessTokenResp: string) {
        let refreshToken = refreshTokenResp;
        let accessToken = accessTokenResp;
        let scope = "https://www.google.com/m8/feeds/contacts/default/full/";

        this.numerosClonadosService.getContatos(scope, accessToken, refreshToken).subscribe(respCon => { console.log("RESPONSE DOS CONTATOS: ", respCon)})
    }

    ngOnInit() {
        this.getAccessToken()
    }

    // public void GetContacts(refreshTokenResp: string, accessTokenResp: string, )
    // {
    //     /*Get Google Contacts From Access Token and Refresh Token*/
    //     string refreshToken = serStatus.refresh_token;
    //     string accessToken = serStatus.access_token;
    //     string scopes = "https://www.google.com/m8/feeds/contacts/default/full/";
    //     OAuth2Parameters oAuthparameters = new OAuth2Parameters()
    //     {
    //         Scope = scopes,
    //         AccessToken = accessToken,
    //         RefreshToken = refreshToken
    //     };
    
    //     RequestSettings settings = new RequestSettings("<var>YOUR_APPLICATION_NAME</var>", oAuthparameters);
    //     ContactsRequest cr = new ContactsRequest(settings);
    //     ContactsQuery query = new ContactsQuery(ContactsQuery.CreateContactsUri("default"));
    //     query.NumberToRetrieve = 5000;
    //     Feed<Contact> feed = cr.Get<Contact>(query);
        
    //     StringBuilder sb = new StringBuilder();
    //     int i = 1;
    //     foreach (Contact entry in feed.Entries)
    //     {
    //         foreach (EMail email in entry.Emails)
    //         {
    //             sb.Append("<span>"+ i + ". </span>").Append(email.Address)
    //               .Append("<br/>");
    //             i++;
    //         }
    //     }
    //     /*End*/
    
    //     dataDiv.InnerHtml = sb.ToString();
    // }
}