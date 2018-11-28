import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'dvt-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {
  altura: number;
  precio: number;
  producto: string;
  frase: string;
  fecha: Date;
  oDatos: {};

  constructor() { }

  ngOnInit() {
    this.producto = 'bolígrafo';
    this.altura = 32.7865;
    this.precio = 100;
    this.fecha = new Date();
    this.frase = 'Un anillo para gobernarlos a todos';
    this.oDatos = {
      producto : 'bolígrafo',
      altura : 32.7865,
      precio : 100
    };
  }

}
