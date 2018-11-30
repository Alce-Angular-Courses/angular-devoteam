import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';

/*
import { HomeModule } from './home/home.module';
import { TareasModule } from './tareas/tareas.module';
import { BlogModule } from './blog/blog.module';
import { CursosModule } from './cursos/cursos.module';
import { LibrosModule } from './libros/libros.module';
*/
import { AboutModule } from './about/about.module';
import { UsersModule } from './users/users.module';

import { registerLocaleData } from '@angular/common';
import localeEs from '@angular/common/locales/es';
// the second parameter 'es' is optional
registerLocaleData(localeEs, 'es');


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule,
    AppRoutingModule,
    CoreModule,
    /* HomeModule, TareasModule, BlogModule, CursosModule,
    LibrosModule,UsersModule, AboutModule,*/
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
