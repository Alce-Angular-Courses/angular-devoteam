import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { SaludoComponent } from './saludo/saludo.component';
import { SaludoLocalComponent } from './saludo-local/saludo-local.component';
import { FormsModule } from '@angular/forms';
import { TruncatePipe } from './truncate.pipe';
import { PipesComponent } from './pipes/pipes.component';

import { registerLocaleData } from '@angular/common';
import localeEs from '@angular/common/locales/es';

// the second parameter 'es' is optional
registerLocaleData(localeEs, 'es');

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        HomeComponent,
        SaludoComponent,
        SaludoLocalComponent,
        PipesComponent,
        TruncatePipe
       ],
      imports: [FormsModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
