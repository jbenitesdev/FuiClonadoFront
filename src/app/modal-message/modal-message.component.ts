import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { StoreService } from '../shared/store.service';

@Component({
  selector: 'app-modal-message',
  templateUrl: './modal-message.component.html',
  styleUrls: ['./modal-message.component.css']
})
export class ModalMessageComponent implements OnInit {
  constructor(public bsModalRef: BsModalRef, readonly storeService: StoreService) {  }

  ngOnInit() {

  }
}
