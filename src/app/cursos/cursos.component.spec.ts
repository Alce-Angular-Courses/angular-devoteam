import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CursosComponent } from './cursos.component';
import { FormMdComponent } from './form-md/form-md.component';
import { FormTdComponent } from './form-td/form-td.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

describe('CursosComponent', () => {
  let component: CursosComponent;
  let fixture: ComponentFixture<CursosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        CursosComponent,
        FormMdComponent,
        FormTdComponent ],
      imports: [
        ReactiveFormsModule,
        FormsModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CursosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
