import { async, TestBed, ComponentFixture } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { CompComponent } from './comp.component';

describe('CompComponent', () => {
  let fixture: ComponentFixture<CompComponent>;
  let comp: CompComponent;
  let debugElement: DebugElement;
  let element: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        CompComponent
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompComponent);
    comp = fixture.componentInstance;
    debugElement = fixture.debugElement.query(By.css('.comp'));
    element = debugElement.nativeElement;
  });

  describe('When load comp', () => {
    it('Should have "hello world!" as "text" field', () => {
      expect(comp.text).toBe('hello world!');
    });
    it('Should have "hello world!" as "text" field', () => {
      expect(comp.text).toBe('hello world!');
    });
  });

  describe('When change value of text field', () => {
    const nextTextValue = 'changed hello world';
    beforeEach(() => {
      comp.text = nextTextValue;
      fixture.detectChanges();
    });

    it('Should render text in element', () => {
       expect(element.innerText).toBe(nextTextValue);
    });
  });
});
