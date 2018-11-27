import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'dvt-saludo',
  templateUrl: './saludo.component.html',
  styleUrls: ['./saludo.component.css']
})
export class SaludoComponent implements OnInit {
  nombre: string;
  constructor() { }

  ngOnInit() {
    this.nombre = 'amigo';
  }

  onBorrar (ev) {
    this.nombre = '';
    console.log(ev);
  }

}
