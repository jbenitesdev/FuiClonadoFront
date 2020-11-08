import { Injectable } from '@angular/core';

@Injectable()
export class StoreService {
    registroUsuario: any;
    modalEnviarError: boolean;
    modalBuscarNumeroError: boolean;
    modalBuscarNumeroValue: string;
    modalBuscarMsg: string;
    numeroTelefone: string;
    notificarContatos: boolean;
}
