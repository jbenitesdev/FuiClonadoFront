import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { VerificarNumeroComponent } from './verificar-numero/verificar-numero.component';
import { FaqComponent } from './faq/faq.component';
import { ContatoComponent } from './contato/contato.component';
import { ContatoWppComponent } from './contatoWpp/contatoWpp.component';


const routes: Routes = [
  { path: '', redirectTo: 'home',  pathMatch: 'full'},
  { path: 'home', component: HomeComponent },
  { path: 'verificarNumero', component: VerificarNumeroComponent },
  { path: 'faq', component: FaqComponent },
  { path: 'contato', component: ContatoComponent },
  { path: 'contatosApi', component: ContatoWppComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
