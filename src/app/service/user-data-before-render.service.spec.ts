import { TestBed } from '@angular/core/testing';

import { UserDataBeforeRenderService } from './user-data-before-render.service';

describe('UserDataBeforeRenderService', () => {
  let service: UserDataBeforeRenderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserDataBeforeRenderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
