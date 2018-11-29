import { Component, OnInit } from '@angular/core';
import { Libro } from 'src/app/models/libros.model';
import { BooksService } from 'src/app/services/books.service';

@Component({
  selector: 'dvt-libros-mock',
  templateUrl: './libros-mock.component.html',
  styleUrls: ['./libros-mock.component.css']
})
export class LibrosMockComponent implements OnInit {
  clave: string;
  aLibros: Array<Libro>;

  constructor(public booksSrv: BooksService) { }

  ngOnInit() {
    this.clave = 'angular';
    this.aLibros = [];
  }

  buscar() {
    this.aLibros = this.booksSrv.getLibros(this.clave);
  }

  buscarAsync() {
     this.booksSrv.getLibrosAsync(this.clave).then(
       (data: any) => { this.aLibros = data; }, // si todo va bien
       (error) => { console.log(error); } // en caso de error
     );
  }

}
