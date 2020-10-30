import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef, ModalOptions } from 'ngx-bootstrap/modal';
import { NumerosClonadosService } from '../service/numeros-clonados.service';
import { StoreService } from '../shared/store.service';
import { ModalMessageComponent } from '../modal-message/modal-message.component';
import { format } from 'url';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css']
})

export class ContatoComponent implements OnInit {
    modalRef: BsModalRef;
    modalConfig: ModalOptions = { class: 'modal-sm modal-dialog-centered' };

    constructor(private modalService: BsModalService,
                private numerosClonadosService: NumerosClonadosService,
                private storeService: StoreService) { }

    onSubmit(form) {
        if (form.status !== 'INVALID') {
            this.numerosClonadosService.enviarEmail(
                form.controls.nome.value,
                form.controls.email.value,
                form.controls.mensagem.value,
                window.location.href).subscribe(res => {
                    if (res.status === 200) {
                        this.openModalMessage(false);
                    } else {
                        this.openModalMessage(true);
                    }
                });
        }
    }

    openModalMessage(hasError: boolean) {
        this.storeService.modalBuscarNumeroError = hasError;
        this.storeService.modalBuscarMsg = hasError ? 'Erro ao enviar e-mail' : 'E-mail enviado com sucesso';
        this.modalRef = this.modalService.show(ModalMessageComponent, this.modalConfig);
    }
    
    ngOnInit() {
    }
}
