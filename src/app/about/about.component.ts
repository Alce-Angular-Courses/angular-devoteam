import { Component, OnInit } from '@angular/core';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'dvt-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  faCoffee: any;
  constructor() { }

  ngOnInit() {
    this.faCoffee = faCoffee;
  }

}
