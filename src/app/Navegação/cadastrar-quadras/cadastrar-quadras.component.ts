import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';
import { CadQuadra } from '../../cad-quadra.service';
import * as Firebase from 'firebase'



@Component({
  selector: 'app-cadastrar-quadras',
  templateUrl: './cadastrar-quadras.component.html',
  styleUrls: ['./cadastrar-quadras.component.css']
})
export class CadastrarQuadrasComponent implements OnInit {
public imagem:any
public email:any
constructor(private Cad:CadQuadra){

}

ngOnInit(): void {
  Firebase.auth().onAuthStateChanged((user: any) => {
    this.email = user.email
    console.log(user)
  })
   

}

public formulario: FormGroup = new FormGroup({
  'endereco': new FormControl(null),
  'numero': new FormControl(null)
   
})
  public ImagemUpload(event: Event) {
    this.imagem = ((<HTMLInputElement>event.target).files) 
  }

  public Armazenar() {
    let teste={
      'endereco':this.formulario.value.endereco,
      'numero':this.formulario.value.numero,
      'imagem':this.imagem[0],
      'nome_usuario':this.Cad.Nome(this.email)
      
    }
    this.Cad.Salvar(teste)    
  
  }
  public Recuperar(){
    this.Cad.RecuperarQuadras()
    .then((quadras:any) => {
      console.log(quadras)
    })
  }
  public Deletar(){
    this.Cad.Deletar()
    .then(() => {
      console.log('quadras')
    })
  }
}
