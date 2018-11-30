import { Component, OnInit } from '@angular/core';
import { Libro } from 'src/app/models/libros.model';
import { GoogleBooksService } from 'src/app/services/google-books.service';

@Component({
  selector: 'dvt-libros-by-service',
  templateUrl: './libros-by-service.component.html',
  styleUrls: ['./libros-by-service.component.css']
})
export class LibrosByServiceComponent implements OnInit {
  clave: string;
  aLibros: Array<Libro>;

  constructor(public gbSrv: GoogleBooksService) { }

  ngOnInit() {
    this.aLibros = [];
  }

  buscar() {
    if (!this.clave) {return false; }
    this.gbSrv.getLibros(this.clave).then(
      (response: any) => {
        this.aLibros = response;
      },
      (error) => {console.log(error); }
    );

  }
}
