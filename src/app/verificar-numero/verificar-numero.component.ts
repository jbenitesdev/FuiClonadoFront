import { Component, OnInit } from '@angular/core';
import { validate } from 'gerador-validador-cpf';

@Component({
    selector: 'app-verificar-numero',
    templateUrl: './verificar-numero.component.html',
    styleUrls: ['./verificar-numero.component.css']
})
export class VerificarNumeroComponent implements OnInit {

    constructor() { }

    public telMask = ['(', /[1-9]/, /\d/, ')', ' ', /\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];

    ngOnInit() {
    }

    onSubmit(form) {
        console.log(form);
        // Verificar o valor, disparar a consulta e após isso exibir a modal com resultado
    }

}
