import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Alumno, Curso, Turno } from 'src/app/models/alumno.model';
import { CURSOS, TURNOS } from 'src/app/models/cursos.data';

@Component({
  selector: 'dvt-form-td',
  templateUrl: './form-td.component.html',
  styleUrls: ['./form-td.component.css']
})
export class FormTdComponent implements OnInit {
  oAlumno: Alumno;
  aCursos: Array<Curso>;
  aTurnos: Array<Turno>;
  @ViewChild('form1') form: any;

  constructor() { }

  ngOnInit() {
    this.oAlumno = new Alumno();
    this.aCursos = CURSOS;
    this.aTurnos = TURNOS;
    console.dir(this.form);
  }

  enviar(ev) {
    console.log(ev);
    ev.preventDefault();
    // TODO sustituir console.log por el envio real el API
    console.log(this.oAlumno);
  }
}
