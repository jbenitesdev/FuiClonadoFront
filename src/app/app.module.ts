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

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    VerificarNumeroComponent,
    ModalMessageComponent,
    ModalEnviarComponent,
    ModalBuscarNumeroComponent,
    FaqComponent,
    ContatoComponent,
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
  ],
  entryComponents: [
    ModalMessageComponent,
    ModalEnviarComponent,
    ModalBuscarNumeroComponent,
  ],
  providers: [StoreService],
  bootstrap: [AppComponent]
})
export class AppModule { }
