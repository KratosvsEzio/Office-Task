import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayNewHtmlComponent } from './display-new-html.component';

describe('DisplayNewHtmlComponent', () => {
  let component: DisplayNewHtmlComponent;
  let fixture: ComponentFixture<DisplayNewHtmlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayNewHtmlComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayNewHtmlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
