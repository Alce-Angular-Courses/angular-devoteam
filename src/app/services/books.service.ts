import { Injectable } from '@angular/core';
import { Libro } from '../models/libros.model';
import { LIBROS } from '../models/libros.data';

@Injectable({
  providedIn: 'root'
})
export class BooksService {
  aLibros: Array<Libro>;

  constructor() {
    this.aLibros = LIBROS;
   }

  getLibros (clave) {
    return this.aLibros;
  }

  getLibrosAsync (clave): Promise<Array<Libro>> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.aLibros);
      }, 1000);
    });
  }

}
