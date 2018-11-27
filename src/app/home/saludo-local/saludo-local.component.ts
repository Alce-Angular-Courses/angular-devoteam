import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'dvt-saludo-local',
  templateUrl: './saludo-local.component.html',
  styleUrls: ['./saludo-local.component.css']
})
export class SaludoLocalComponent implements OnInit {
  @ViewChild('nombreLoc') nombre: ElementRef;
  constructor() { }

  ngOnInit() {
    console.log(this.nombre);
  }

}
