import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuarios.model';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'dvt-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {
  oUser: Usuario;
  aUsers: Array<Usuario>;

  constructor(public usersSrv: UsersService) {
   }

  ngOnInit() {
    this.oUser = new Usuario();
    this.aUsers = [];
    this.getUser();
  }

  getUser() {
    if (this.oUser.id) {
      this.usersSrv.getUser(this.oUser.id).subscribe(
        (response) => { this.oUser = response; }
      );
    } else {
      this.usersSrv.getUsers().subscribe(
        (response) => {this.aUsers = response; }
      );
    }
  }

  addUser() {
    if (!this.oUser.name) {return; }
    this.usersSrv.addUser(this.oUser).subscribe(
      (response) => {this.actualizar(response)}
    );
  }

  modifyUser() {
    if (!this.oUser.id) {return; }
    this.usersSrv.setUser(this.oUser.id, this.oUser).subscribe(
      (response) => {this.actualizar(response); }
    );
  }

  deleteUser() {
    if (!this.oUser.id) {return; }
    this.usersSrv.deleteUser(this.oUser.id).subscribe(
      (response) => { this.actualizar(response); }
    );
  }

  private actualizar(data) {
    console.log(data);
    this.oUser = new Usuario();
    this.getUser();
  }


}
