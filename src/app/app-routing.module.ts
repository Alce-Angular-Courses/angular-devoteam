import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
/*
import { HomeComponent } from './home/home.component';
import { TareasComponent } from './tareas/tareas.component';
import { BlogComponent } from './blog/blog.component';
import { CursosComponent } from './cursos/cursos.component';
import { LibrosComponent } from './libros/libros.component';
import { UsersComponent } from './users/users.component';
import { AboutComponent } from './about/about.component';
*/



const routes: Routes = [
  /*
  { path: 'home', component: HomeComponent },
  { path: 'tareas', component: TareasComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'cursos', component: CursosComponent },
  { path: 'libros', component: LibrosComponent },
  { path: 'users', component: UsersComponent },
  { path: 'about', component: AboutComponent },
  */
  { path: 'home', loadChildren: './home/home.module#HomeModule' },
  { path: 'tareas', loadChildren: './tareas/tareas.module#TareasModule' },
  { path: 'blog', loadChildren: './blog/blog.module#BlogModule' },
  { path: 'cursos', loadChildren: './cursos/cursos.module#CursosModule' },
  { path: 'libros', loadChildren: './libros/libros.module#LibrosModule' },
  { path: 'users', loadChildren: './users/users.module#UsersModule' },
  { path: 'about', loadChildren: './about/about.module#AboutModule' },
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: '**', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
