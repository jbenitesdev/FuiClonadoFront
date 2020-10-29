import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalBuscarNumeroComponent } from './modal-buscar-numero.component';

describe('ModalBuscarNumeroComponent', () => {
  let component: ModalBuscarNumeroComponent;
  let fixture: ComponentFixture<ModalBuscarNumeroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ModalBuscarNumeroComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalBuscarNumeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
