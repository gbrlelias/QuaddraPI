import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Autenticacao } from 'src/app/autenticacao.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public Form: FormGroup = new FormGroup({
    'email': new FormControl(null),
    'senha': new FormControl(null)

  })

  constructor(private autenticacao: Autenticacao) {
  }

 @Output() public exibirPainel:EventEmitter <string>= new EventEmitter <string> ();

  ngOnInit(): void {

  }

  public exibircadastro(){
    this.exibirPainel.emit('cadastro')
  }

  public autenticar(): void {
   this.autenticacao.Auth(this.Form.value.email, btoa(this.Form.value.senha))
   .then(()=>{
     let teste={
       "dados":'gabriel',
       "email":'gabriel',   
            

     }
     
    
   })
   .catch(err =>console.log(err))
  }

  
}
