import { Component, Input, OnInit } from '@angular/core';
import validateColor from "validate-color";

@Component({
  selector: 'app-cadastro',
  templateUrl: './app-cadastro.component.html',
  styleUrls: ['./app-cadastro.component.css']
})

export class AppCadastroComponent implements OnInit {
  nome: string = '';
  email: string = '';
  senha: string = '';
  estado: string = '';
  cidade: string = '';
  bairro: string = '';
  genero: string = '';
  idade: string = '';
  foto: string = '';
  cor: string = '';

  listaPessoas: object[];

  ngOnInit() {
    localStorage.getItem('listPessoa');
  }

  cleanDatas(){
    this.nome = '';
    this.email = '';
    this.senha = '';
    this.estado = '';
    this.cidade  = '';
    this.bairro = '';
    this.genero = '';
    this.idade = '';
    this.foto = '';
    this.cor = '';
  }
  
  enviarDados(){
    if(this.cor == '' ||this.nome == '' || this.email == '' || this.senha == '' || this.estado == '' || this.cidade == ''
    || this.bairro == '' || this.genero == '' || this.idade == '' || this.foto == ''){
        alert('Preencha todos os campos!!')
    } else {
      if(validateColor(this.cor) == false){
        this.cor = 'yellow';
      } 
      if (localStorage.getItem('listPessoa') === null) 
        localStorage.setItem('listPessoa', '[]')
        
        let listPessoa:object[] = JSON.parse( localStorage.getItem('listPessoa') )
        let pessoa = {
          nome:this.nome, 
          email:this.email, 
          senha:this.senha, 
          estado:this.estado, 
          cidade:this.cidade, 
          bairro:this.bairro, 
          genero:this.genero, 
          idade:this.idade, 
          foto:this.foto,
          cor: this.cor
    }
    listPessoa.push(pessoa)  
    localStorage.setItem('listPessoa', JSON.stringify(listPessoa) )
    this.cleanDatas()
   }
  }

}
