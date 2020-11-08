import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { StoreService } from '../shared/store.service';
import { NumerosClonadosService } from '../service/numeros-clonados.service';

@Component({
  selector: 'app-modal-validar-codigo',
  templateUrl: './modal-validar-codigo.component.html',
  styleUrls: ['./modal-validar-codigo.component.css']
})
export class ModalValidarCodigoComponent implements OnInit {
  constructor(public bsModalRef: BsModalRef,
              private numerosClonadosService: NumerosClonadosService,
              private storeService: StoreService,
              private router: Router) {  }

  ngOnInit() {

  }

  onSubmit(form) {
    if (form.status !== 'INVALID') {
      this.verificarCodigo(form.controls.codigo.value);
    }
  }

  verificarCodigo(codigo: string) {
    this.numerosClonadosService.verificarCodigoUsuario(
      this.storeService.numeroTelefone,
      codigo,
      window.location.href).subscribe(res => {
        this.storeService.notificarContatos = res.status === 200 ? true : false;
        const registroUsuario = this.storeService.registroUsuario;

        this.numerosClonadosService.salvarRegistro(
          registroUsuario.nome,
          registroUsuario.cpf,
          registroUsuario.numero,
          registroUsuario.email,
          registroUsuario.termo,
          window.location.href).subscribe(salvarRegistroResp => {
            this.bsModalRef.hide();
            this.router.navigate(['notificarContatos']);
          });
      });
  }
}
