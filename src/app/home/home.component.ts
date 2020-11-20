import { Component, OnInit, TemplateRef } from '@angular/core';
import { ModalValidarCodigoComponent } from '../modal-validar-codigo/modal-validar-codigo.component';
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

  tratarNumero(numero: string) {
    const result = numero.replace('(', '').replace(')', '').replace('-', '').replace(' ', '');
    return '+55' + result;
  }

  onSubmit(form) {
    if (form.status !== 'INVALID') {
      const numero = this.tratarNumero(form.controls.numero.value);

      this.numerosClonadosService.verificarUsuario(numero, window.location.href).subscribe(res => {
        if (res.status === 200) {
          this.storeService.registroUsuario = {
            nome : form.controls.nome.value,
            numero: form.controls.numero.value,
            email: form.controls.email.value,
            termo: form.controls.termo.value
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

  ngOnInit() {
  }
}
