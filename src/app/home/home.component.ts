import { Component, OnInit, TemplateRef } from '@angular/core';
import { ModalEnviarComponent } from '../modal-enviar/modal-enviar.component';
import { BsModalService, BsModalRef, ModalOptions } from 'ngx-bootstrap/modal';
import { validate } from 'gerador-validador-cpf';
import { NumerosClonadosService } from '../service/numeros-clonados.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  modalRef: BsModalRef;
  modalConfig: ModalOptions = { class: 'modal-sm modal-dialog-centered'};

  constructor(private modalService: BsModalService,  private numerosClonadosService: NumerosClonadosService) { }

  public cpfMask = [ /[1-9]/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '-', /\d/, /\d/];
  public telMask = ['(', /[1-9]/, /\d/, ')', ' ', /\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];

  validarCpf = (cpf) => {
      return validate(cpf);
  }

  onSubmit(form) {
    console.log(form);

    if (form.status !== 'INVALID' && validate(form.controls.cpf.value)) {
      // Salvar dados no banco
      console.log('VALOR DA VALIDACAO: ', validate(form.controls.cpf.value));
      this.numerosClonadosService.salvarRegistro(form.controls.nome.value, form.controls.cpf.value, form.controls.numero.value, form.controls.email.value, form.controls.termo.value).subscribe(res => { console.log("VALOR DE RES: ", res)})
      this.openModalEnviar();
    }
  }

  openModalEnviar() {
    this.modalRef = this.modalService.show(ModalEnviarComponent, this.modalConfig);
  }

  ngOnInit() {
  }

}
