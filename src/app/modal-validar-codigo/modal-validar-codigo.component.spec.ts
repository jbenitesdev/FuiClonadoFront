import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalValidarCodigoComponent } from './modal-validar-codigo.component';

describe('ModalValidarCodigoComponent', () => {
  let component: ModalValidarCodigoComponent;
  let fixture: ComponentFixture<ModalValidarCodigoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ModalValidarCodigoComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalValidarCodigoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
