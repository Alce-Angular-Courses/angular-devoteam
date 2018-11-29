import { Component, OnInit } from '@angular/core';
import { Libro } from 'src/app/models/libros.model';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'dvt-libros-google',
  templateUrl: './libros-google.component.html',
  styleUrls: ['./libros-google.component.css']
})
export class LibrosGoogleComponent implements OnInit {
  clave: string;
  aLibros: Array<Libro>;
  baseURL: string;

  constructor(public http: HttpClient) { }

  ngOnInit() {
    this.baseURL = environment.apiLibros;
    this.aLibros = [];
  }

  buscar() {
    if (!this.clave) {return false; }
    const url = this.baseURL + this.clave;
    this.http.get(url).toPromise().then(
      (data: any) =>  {
        let aData = [];
        aData = data.items.map(
          (item) => item.volumeInfo.title
        );
        console.log(aData); },
      (error) => {console.log(error); }
    );
  }

}
