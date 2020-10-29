import { Component, OnInit } from '@angular/core';
import { BsModalRef, ModalOptions, BsModalService } from 'ngx-bootstrap/modal';
import { NumerosClonadosService } from '../service/numeros-clonados.service';
import { StoreService } from '../shared/store.service';
import { ModalBuscarNumeroComponent } from '../modal-buscar-numero/modal-buscar-numero.component';
import { ModalMessageComponent } from '../modal-message/modal-message.component';

@Component({
    selector: 'app-verificar-numero',
    templateUrl: './verificar-numero.component.html',
    styleUrls: ['./verificar-numero.component.css']
})
export class VerificarNumeroComponent implements OnInit {
    modalRef: BsModalRef;
    modalConfig: ModalOptions = { class: 'modal-sm modal-dialog-centered' };

    constructor(private modalService: BsModalService,
                private numerosClonadosService: NumerosClonadosService,
                private storeService: StoreService) { }

    public telMask = ['(', /[1-9]/, /\d/, ')', ' ', /\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];

    ngOnInit() {
    }

    onSubmit(form) {
        if (form.controls.numero.value) {
            this.numerosClonadosService.buscarNumero(form.controls.numero.value, window.location.href).subscribe(res => {
               if (res.status === 200) {
                 this.openModalBuscarNumero(form.controls.numero.value, false);
               } else {
                 this.openModalBuscarNumero(form.controls.numero.value, true);
               }
            });
        } else {
            this.openModalMessage(true);
        }
    }

    openModalBuscarNumero(numero: string, hasError: boolean) {
        this.storeService.modalBuscarNumeroValue = numero;
        this.storeService.modalBuscarNumeroError = hasError;

        this.modalRef = this.modalService.show(ModalBuscarNumeroComponent, this.modalConfig);
    }

    openModalMessage(hasError: boolean) {
        this.storeService.modalBuscarNumeroError = hasError;

        this.modalRef = this.modalService.show(ModalMessageComponent, this.modalConfig);
    }
}
