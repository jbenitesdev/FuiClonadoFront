import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalEnviarComponent } from './modal-enviar.component';

describe('ModalEnviarComponent', () => {
  let component: ModalEnviarComponent;
  let fixture: ComponentFixture<ModalEnviarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ModalEnviarComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalEnviarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
