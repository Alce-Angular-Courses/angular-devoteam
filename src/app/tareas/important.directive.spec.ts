import { Component, DebugElement, ElementRef } from '@angular/core';
import { By } from '@angular/platform-browser';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { ImportantDirective } from './important.directive';

/* @Component({
  template: `<p id="test" important></p>`
})
class TestComponent {
}

let component: TestComponent;
let fixture: ComponentFixture<TestComponent>;
let elem: DebugElement;

beforeEach( () => {
  TestBed.configureTestingModule({
     declarations: [
      TestComponent,
      ImportantDirective
    ]
  }).compileComponents();
});

beforeEach(() => {
  fixture = TestBed.createComponent(TestComponent);
  component = fixture.componentInstance;
  fixture.detectChanges();
  elem = fixture.debugElement.query(By.css('#test'));
});


describe('ImportantDirective', () => {
  it('should create an instance', () => {
    const directive = new ImportantDirective(elem);
    expect(directive).toBeTruthy();
  });
}); */
