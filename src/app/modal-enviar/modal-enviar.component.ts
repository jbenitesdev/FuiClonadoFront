import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { StoreService } from '../shared/store.service';

@Component({
  selector: 'app-modal-enviar',
  templateUrl: './modal-enviar.component.html',
  styleUrls: ['./modal-enviar.component.css']
})
export class ModalEnviarComponent implements OnInit {
  constructor(public bsModalRef: BsModalRef, readonly storeService: StoreService) {  }
  url = 'https://www.facebook.com/dialog/share?href=https://fuiclonadoarq.herokuapp.com&app_id=273928910598923';

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
