import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TareasRoutingModule } from './tareas-routing.module';
import { TareasComponent } from './tareas.component';
import { ListaSimpleComponent } from './lista-simple/lista-simple.component';
import { FormsModule } from '@angular/forms';
import { ListaPlusComponent } from './lista-plus/lista-plus.component';
import { TareaComponent } from './tarea/tarea.component';
import { NewTareaComponent } from './new-tarea/new-tarea.component';
import { ImportantDirective } from './important.directive';

@NgModule({
  declarations: [
    TareasComponent,
    ListaSimpleComponent,
    ListaPlusComponent,
    TareaComponent,
    NewTareaComponent,
    ImportantDirective],
  imports: [
    CommonModule,
    FormsModule,
    TareasRoutingModule
  ]
})
export class TareasModule { }
