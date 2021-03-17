import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { GammaComponent } from './gamma.component';

describe('GammaComponent', () => {
  let component: GammaComponent;
  let fixture: ComponentFixture<GammaComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ GammaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GammaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
