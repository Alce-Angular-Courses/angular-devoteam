import { Component, OnInit } from '@angular/core';
import { Tarea } from 'src/app/models/tarea.model';

@Component({
  selector: 'dvt-lista-simple',
  templateUrl: './lista-simple.component.html',
  styleUrls: ['./lista-simple.component.css']
})
export class ListaSimpleComponent implements OnInit {

  oTarea: Tarea;
  aTareas: Array<Tarea>;

  constructor() { }

  ngOnInit() {
    this.oTarea = new Tarea();
    this.aTareas = [];
  }

  addTarea() {
    this.aTareas.push(Object.assign({}, this.oTarea));
    this.oTarea.nombre = '';
    console.log(this.aTareas);

    // let o = {nombre: 'Pepe'};
    // let o2 = JSON.parse(JSON.stringify(o));
    // let o2 = Object.assign({}, o)

  }
}
