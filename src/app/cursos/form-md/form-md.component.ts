import { Component, OnInit } from '@angular/core';
import { Turno, Curso, Alumno } from 'src/app/models/alumno.model';
import { TURNOS, CURSOS } from 'src/app/models/cursos.data';
import { FormGroup, FormBuilder, Validators, EmailValidator } from '@angular/forms';

@Component({
  selector: 'dvt-form-md',
  templateUrl: './form-md.component.html',
  styleUrls: ['./form-md.component.css']
})
export class FormMdComponent implements OnInit {
  aTurnos: Array<Turno>;
  aCursos: Array<Curso>;
  form: FormGroup;
  oAlumno: Alumno;
  constructor(public formBuilder: FormBuilder) {}

  ngOnInit() {
      this.aTurnos = TURNOS;
      this.aCursos = CURSOS;
      this.form = this.formBuilder.group({
        nombre: ['', [Validators.required, Validators.minLength(2)] ],
        apellidos:  ['', Validators.required, ],
        email:  ['', [Validators.required, Validators.email]],
        isOk: ['', Validators.required],
        turno: [null, Validators.required],
        curso: [null, Validators.required]
      });

      console.log(this.form);
  }
  // get f() { return this.form.controls; }
  get nombre() { return this.form.get('nombre'); }
  get apellidos() { return this.form.get('apellidos'); }
  get email() { return this.form.get('email'); }
  get isOk() { return this.form.get('isOk'); }
  get turno() { return this.form.get('turno'); }
  get curso() { return this.form.get('curso'); }


  enviar(ev) {
    console.log(ev);
    ev.preventDefault();
    // TODO sustituir console.log por el envio real el API
    this.oAlumno = Object.assign({}, this.form.value);
  }
}
