import { Component, OnInit } from '@angular/core';
import { Alumno, Curso } from 'src/app/models/alumno.model';

@Component({
  selector: 'dvt-form-td',
  templateUrl: './form-td.component.html',
  styleUrls: ['./form-td.component.css']
})
export class FormTdComponent implements OnInit {
  oAlumno: Alumno;
  aCursos: Array<Curso>;

  constructor() { }

  ngOnInit() {
    this.oAlumno = new Alumno();
    this.aCursos = [
      {id: 'A', nombre: 'Angular'},
      {id: 'R', nombre: 'React'},
      {id: 'V', nombre: 'Vue'}
    ];
  }

}
