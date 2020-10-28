import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-modal-enviar',
  templateUrl: './modal-enviar.component.html',
  styleUrls: ['./modal-enviar.component.css']
})
export class ModalEnviarComponent implements OnInit {
  constructor(public bsModalRef: BsModalRef) { }
  url = 'https://www.facebook.com/dialog/share?href=https%3A%2F%2Fg1.globo.com%2Fpolitica%2Feleicoes%2F2020%2Fnoticia%2F2020%2F10%2F27%2Feleicoes-2020-tse-aprova-envio-de-tropas-federais-a-345-localidades-em-sete-estados.ghtml&app_id=273928910598923';

  ngOnInit() {

  }

  openShareDialog() {
    const availHeight = window.screen.availHeight - (window.outerHeight - window.innerHeight);

    const width = 520;
    const height = Math.min(availHeight, 600);
    const top = (availHeight / 2) - (height / 2);
    const left = (window.screen.availWidth / 2) - (width / 2);

    window.open(this.url, '_blank', `height=${height}, width=${width},top=${top},left=${left}`);
  }
}
