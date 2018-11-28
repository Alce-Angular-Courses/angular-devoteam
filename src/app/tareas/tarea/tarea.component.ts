import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { Tarea } from 'src/app/models/tarea.model';

@Component({
  selector: 'dvt-tarea',
  templateUrl: './tarea.component.html',
  styleUrls: ['./tarea.component.css']
})
export class TareaComponent implements OnInit {
  @Input() oTarea: Tarea;
  @Input() index: number;
  @Output() evDeleteTarea: EventEmitter<number>;

  constructor() {
    this.evDeleteTarea = new EventEmitter();
  }

  ngOnInit() {
  }

  sendDeleteTarea() {
    this.evDeleteTarea.next(this.index);
  }
}
