import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'dvt-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {

  userID: any;
  constructor(
    public activatedRoute: ActivatedRoute,
    public router: Router) { }

  ngOnInit() {
    this.userID = this.activatedRoute.snapshot.params['id'];
  }

  goUsers() {
    this.router.navigateByUrl('/users');
  }
}
