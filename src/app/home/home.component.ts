import { Component, OnInit, TemplateRef } from '@angular/core';
import { ModalEnviarComponent } from '../modal-enviar/modal-enviar.component';
import { BsModalService, BsModalRef, ModalOptions } from 'ngx-bootstrap/modal';
import { validate } from 'gerador-validador-cpf';
import { NumerosClonadosService } from '../service/numeros-clonados.service';
import { StoreService } from '../shared/store.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  modalRef: BsModalRef;
  modalConfig: ModalOptions = { class: 'modal-sm modal-dialog-centered' };

  constructor(private modalService: BsModalService,
              private numerosClonadosService: NumerosClonadosService,
              private storeService: StoreService) { }

  public cpfMask = [ /[1-9]/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '-', /\d/, /\d/];
  public telMask = ['(', /[1-9]/, /\d/, ')', ' ', /\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];

  validarCpf = (cpf) => {
    return validate(cpf);
  }

  onSubmit(form) {
    if (form.status !== 'INVALID' && validate(form.controls.cpf.value)) {
      this.numerosClonadosService.salvarRegistro(
        form.controls.nome.value,
        form.controls.cpf.value,
        form.controls.numero.value,
        form.controls.email.value,
        form.controls.termo.value,
        window.location.href).subscribe(res => {
          if (res.status === 200) {
            this.openModalEnviar(false);
          } else {
            this.openModalEnviar(true);
          }
      });
    }
  }

  openModalEnviar(hasError: boolean) {
    this.storeService.modalEnviarError = hasError;
    this.modalRef = this.modalService.show(ModalEnviarComponent, this.modalConfig);
  }

  ngOnInit() {
  }
}
