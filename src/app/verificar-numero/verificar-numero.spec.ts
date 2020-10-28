import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerificarNumero } from './verificar-numero.component';

describe('HomeComponent', () => {
    let component: VerificarNumero;
    let fixture: ComponentFixture<VerificarNumero>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [VerificarNumero]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(VerificarNumero);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
