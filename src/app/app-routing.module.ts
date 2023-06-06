import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroComponent } from './acesso/cadastro/cadastro.component';
import {AcessoComponent} from './acesso/acesso.component'
import { HomeComponent } from './Navegação/home/home.component';
import { LoginComponent } from './acesso/login/login.component';
import { MainpageComponent } from './Navegação/mainpage/mainpage.component';
import { CadastrarQuadrasComponent } from './Navegação/cadastrar-quadras/cadastrar-quadras.component';

const routes: Routes = [
  {path: '', component:AcessoComponent},
  {path: 'cadastro', component: CadastroComponent},
  {path:'home', component: HomeComponent},
  {path: 'login', component:LoginComponent},
  {path: 'main', component:MainpageComponent},
  {path: 'cadastrar-quadras', component:CadastrarQuadrasComponent}

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
}
