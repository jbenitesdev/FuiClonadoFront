import { BsModalRef, BsModalService, ModalOptions } from 'ngx-bootstrap/modal';
import { Component, OnInit } from '@angular/core';
import { NumerosClonadosService } from '../service/numeros-clonados.service';
import { StoreService } from '../shared/store.service';
import { ModalValidarCodigoComponent } from '../modal-validar-codigo/modal-validar-codigo.component';

@Component({
  selector: 'app-remover-contato',
  templateUrl: './remover-contato.component.html',
  styleUrls: ['./remover-contato.component.css']
})
export class RemoverContatoComponent implements OnInit {
  modalRef: BsModalRef;
  modalConfig: ModalOptions = { class: 'modal-sm modal-dialog-centered' };

  constructor(private modalService: BsModalService,
    private numerosClonadosService: NumerosClonadosService,
    private storeService: StoreService) { }

  ngOnInit() {
  }

  tratarNumero(numero: string) {
    const result = numero.replace('(', '').replace(')', '').replace('-', '').replace(' ', '');
    return '+55' + result;
  }


  onSubmit(form) {
    if (form.status !== 'INVALID'){
      const numero = this.tratarNumero(form.controls.numero.value);
      console.log("NUMERO: ", numero);
      this.numerosClonadosService.verificarUsuario(numero, window.location.href).subscribe(res => {
        console.log("VALOR DE RES: ", res)
        if (res.status === 200) {
          this.storeService.registroUsuario = {
            numero: form.controls.numero.value
          };

          this.openModalValidarCodigo(numero);
        }
      });
    }
  }

  openModalValidarCodigo(numeroTelefone: string) {
    this.storeService.numeroTelefone = numeroTelefone;
    this.modalRef = this.modalService.show(ModalValidarCodigoComponent, this.modalConfig);
  }
  

}
