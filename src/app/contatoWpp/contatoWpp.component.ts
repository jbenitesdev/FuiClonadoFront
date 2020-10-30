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
        // let redirectUrl = "https://www.demo.yogihosting.com/aspnet/google-contacts-api/index.aspx";
        let redirectUrl = "https://fuiclonadoarq.herokuapp.com/contatosApi"

        window.location.href = "https://accounts.google.com/o/oauth2/auth?redirect_uri="+redirectUrl+"&response_type=code&client_id=" + clientId + "&scope=https://www.google.com/m8/feeds/&approval_prompt=force&access_type=offline";
        //Response.Redirect("https://accounts.google.com/o/oauth2/auth?redirect_uri="+redirectUrl+"&response_type=code&client_id=" + clientId + "&scope=https://www.google.com/m8/feeds/&approval_prompt=force&access_type=offline");
        
    }

    ngOnInit() {
    }
}
