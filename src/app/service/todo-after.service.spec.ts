import { TestBed } from '@angular/core/testing';

import { TodoAfterService } from './todo-after.service';

describe('TodoAfterService', () => {
  let service: TodoAfterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TodoAfterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
