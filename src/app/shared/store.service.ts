import { Injectable } from '@angular/core';

@Injectable()
export class StoreService {
    modalEnviarError: boolean;
    modalBuscarNumeroError: boolean;
    modalBuscarNumeroValue: string;
    modalBuscarMsg: string;
}
