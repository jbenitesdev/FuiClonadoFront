import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomeComponent } from './home/home.component';
import { VerificarNumeroComponent } from './verificar-numero/verificar-numero.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
// import { NgxMaskModule } from 'ngx-mask';
import { TextMaskModule } from 'angular2-text-mask';
import { ModalEnviarComponent } from './modal-enviar/modal-enviar.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { FaqComponent } from './faq/faq.component';
import { HttpClientModule } from '@angular/common/http';
import { StoreService } from './shared/store.service';
import { ModalBuscarNumeroComponent } from './modal-buscar-numero/modal-buscar-numero.component';
import { ModalMessageComponent } from './modal-message/modal-message.component';
import { ContatoComponent } from './contato/contato.component';
import { AccordionModule } from 'ngx-accordion';
import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';
import { ContatoWppComponent } from './contatoWpp/contatoWpp.component';
import { NotificarContatosComponent } from './notificar-contatos/notificar-contatos.component';
import { ModalValidarCodigoComponent } from './modal-validar-codigo/modal-validar-codigo.component';
import { RemoverContatoComponent } from './remover-contato/remover-contato.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    VerificarNumeroComponent,
    ModalMessageComponent,
    ModalEnviarComponent,
    ModalBuscarNumeroComponent,
    ModalValidarCodigoComponent,
    FaqComponent,
    ContatoComponent,
    ContatoWppComponent,
    NotificarContatosComponent,
    RemoverContatoComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    RouterModule,
    MDBBootstrapModule.forRoot(),
    TextMaskModule,
    ModalModule.forRoot(),
    HttpClientModule,
    AccordionModule,
    NgbAccordionModule
  ],
  entryComponents: [
    ModalMessageComponent,
    ModalEnviarComponent,
    ModalBuscarNumeroComponent,
    ModalValidarCodigoComponent,
  ],
  providers: [StoreService],
  bootstrap: [AppComponent]
})
export class AppModule { }
