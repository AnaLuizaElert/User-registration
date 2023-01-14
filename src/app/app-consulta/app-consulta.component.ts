import { Component } from '@angular/core';

@Component({
  selector: 'app-consulta',
  templateUrl: './app-consulta.component.html',
  styleUrls: ['./app-consulta.component.css']
})

export class AppConsultaComponent {
  
  listaPessoas = JSON.parse(localStorage.getItem('listPessoa'));
  constructor() { }

}
