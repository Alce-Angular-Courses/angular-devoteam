import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PipesComponent } from './pipes.component';
import { TruncatePipe } from '../truncate.pipe';

describe('PipesComponent', () => {
  let component: PipesComponent;
  let fixture: ComponentFixture<PipesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        PipesComponent,
        TruncatePipe
       ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
