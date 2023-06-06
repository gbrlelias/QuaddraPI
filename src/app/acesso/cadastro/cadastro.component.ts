import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

import { Usuario } from '../usuario.model';
import { Autenticacao } from 'src/app/autenticacao.service';



@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {


  Form: FormGroup = new FormGroup({

    'email': new FormControl(null),
    'nome_completo': new FormControl(null),
    'telefone': new FormControl(null),
    'senha': new FormControl(null)

  })
  public imagem: any
  public teste: any

  constructor(private autenticacao: Autenticacao) {

  }

  ngOnInit(): void {

  }

  @Output() public exibirpainel: EventEmitter<string> = new EventEmitter<string>()

  public exibirlogin(): void {
    this.exibirpainel.emit('login')

  }

  CadastrarUsuario(): void {


    let usuario: Usuario = new Usuario
      (this.Form.value.email,
        this.Form.value.nome_completo,
        this.Form.value.telefone,
        btoa(this.Form.value.senha)
      )

    if (this.Form.value.email == null || this.Form.value.nome_completo == null ||
      this.Form.value.senha == null || this.Form.value.telefone == null) {

      alert('Preencha todos os campos')

    }
    else {

      this.autenticacao.CadUser(usuario)
        .then(() => {
          this.exibirlogin()
        })
        .catch(err => console.log(err));

    }





  }

  
}
