import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectVsDatalistComponent } from './select-vs-datalist.component';

describe('SelectVsDatalistComponent', () => {
  let component: SelectVsDatalistComponent;
  let fixture: ComponentFixture<SelectVsDatalistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectVsDatalistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectVsDatalistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
