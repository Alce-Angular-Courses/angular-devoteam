import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'dvt-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  autor: string;
  lugar: string;
  empresa: string;
  fecha: Date;

  constructor() { }

  ngOnInit() {
    this.autor = 'Alejandro Cerezo';
    this.empresa = 'Formadores IT';
    this.lugar = 'Madrid';
    this.fecha = new Date();
  }

}
