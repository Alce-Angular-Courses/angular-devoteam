import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LibrosRoutingModule } from './libros-routing.module';
import { LibrosComponent } from './libros.component';
import { LibrosMockComponent } from './libros-mock/libros-mock.component';
import { LibrosGoogleComponent } from './libros-google/libros-google.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [LibrosComponent, LibrosMockComponent, LibrosGoogleComponent],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    LibrosRoutingModule
  ]
})
export class LibrosModule { }
