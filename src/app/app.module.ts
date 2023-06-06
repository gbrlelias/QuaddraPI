import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ReactiveFormsModule } from '@angular/forms'; 
import { Autenticacao } from './autenticacao.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AcessoComponent } from './acesso/acesso.component';

import { LoginComponent } from './acesso/login/login.component';
import { CadastroComponent } from './acesso/cadastro/cadastro.component';
import { HomeComponent } from './Navegação/home/home.component';

import { AuthGuard } from './aut-guard.service';
import { MainpageComponent } from './Navegação/mainpage/mainpage.component';
import { CadastrarQuadrasComponent } from './Navegação/cadastrar-quadras/cadastrar-quadras.component';
import { HeaderComponent } from './Navegação/header/header.component';
import { CadQuadra } from './cad-quadra.service';

@NgModule({
  declarations: [
    AppComponent,
    AcessoComponent,
    LoginComponent,
    CadastroComponent,
    HomeComponent,
    MainpageComponent,
    CadastrarQuadrasComponent,
    HeaderComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [Autenticacao, AuthGuard, CadQuadra],
  bootstrap: [AppComponent]
})
export class AppModule { }
