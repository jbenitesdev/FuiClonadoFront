import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { StoreService } from '../shared/store.service';

@Component({
  selector: 'app-modal-buscar-numero',
  templateUrl: './modal-buscar-numero.component.html',
  styleUrls: ['./modal-buscar-numero.component.css']
})
export class ModalBuscarNumeroComponent implements OnInit {
  constructor(public bsModalRef: BsModalRef, readonly storeService: StoreService) {  }

  ngOnInit() {

  }
}
