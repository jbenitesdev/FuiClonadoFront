import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent implements OnInit {
  constructor() { }

  ngOnInit() {

  }

  onSubmit(form) {
    console.log('Enviou o e-mail');
  }

}
