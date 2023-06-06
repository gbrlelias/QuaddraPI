import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import * as firebase from 'firebase';
import { Autenticacao } from 'src/app/autenticacao.service';
import { CadQuadra } from '../../cad-quadra.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private autenticacao:Autenticacao, private Cad: CadQuadra){}
  ngOnInit(): void {
      
  }
  public Quadras:any
  public teste: any =0

  public Form: FormGroup = new FormGroup({
    'email': new FormControl(null),
    'senha': new FormControl(null)

  })

 /* async deletar(){
    try {
    await this.autenticacao.DelUserBD(this.Form.value.email);
    console.log('deletado');
    await this.autenticacao.desativarConta();
    } catch (error) {
    console.error(error);
    }
    }
    sair(){
      
      this.autenticacao.sair()
    }*/

    public Recuperar(){
      
      this.Cad.RecuperarQuadras()
      .then((quadras:any) => {
        this.Quadras=quadras
        console.log(quadras)
      })
    }
    public  Deletar(dados:any){
      let dado =dados.key
      console.log(dado)
      this.Cad.testando(dado)
      .then(()=>{
        console.log('deu certo')
      })
      
    }
}
