import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'dvt-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title: string;
  logo: string;

  constructor() {}

  ngOnInit() {
    this.title = 'angular-devoteam';
    this.logo = '../assets/logo.svg';
  }

}
