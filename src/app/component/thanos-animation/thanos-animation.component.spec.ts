import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThanosAnimationComponent } from './thanos-animation.component';

describe('ThanosAnimationComponent', () => {
  let component: ThanosAnimationComponent;
  let fixture: ComponentFixture<ThanosAnimationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThanosAnimationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThanosAnimationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
