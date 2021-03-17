import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { BetaComponent } from './beta.component';

describe('BetaComponent', () => {
  let component: BetaComponent;
  let fixture: ComponentFixture<BetaComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ BetaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
