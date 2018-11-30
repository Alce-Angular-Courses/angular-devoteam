import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';
import { ListaComponent } from './lista/lista.component';
import { FormsModule } from '@angular/forms';
import { DetalleComponent } from './detalle/detalle.component';

@NgModule({
  declarations: [UsersComponent, ListaComponent, DetalleComponent],
  imports: [
    CommonModule,
    FormsModule,
    UsersRoutingModule
  ]
})
export class UsersModule { }
