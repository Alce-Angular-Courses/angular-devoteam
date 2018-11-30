import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Libro } from '../models/libros.model';

@Injectable({
  providedIn: 'root'
})
export class GoogleBooksService {
  baseUrl: string;
  aLibros: Array<Libro>;

  constructor(public http: HttpClient) {
    this.baseUrl = environment.apiLibros;
  }

  getLibros(clave: string) {
    const url = this.baseUrl + clave;
    return this.http.get(url).toPromise().then(
      (response: any) => {
        this.aLibros = response.items
        .map((item) => this.procesaLibro(item));
        return new Promise(
          (resolve) => { resolve(this.aLibros); }
        );
      });
  }

  private procesaLibro (item) {
    const libro = new Libro();
    libro.id = item.id;
    libro.titulo = item.volumeInfo.title;
    if (item.volumeInfo.authors) {
      libro.autor = item.volumeInfo.authors.join(' | ');
    }
    return libro;
  }
}
