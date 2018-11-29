import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AboutRoutingModule } from './about-routing.module';
import { AboutComponent } from './about.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [AboutComponent],
  imports: [
    CommonModule,
    NgbModule,
    FontAwesomeModule,
    AboutRoutingModule
  ]
})
export class AboutModule { }
