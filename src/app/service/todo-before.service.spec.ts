import { TestBed } from '@angular/core/testing';

import { TodoBeforeService } from './todo-before.service';

describe('TodoBeforeService', () => {
  let service: TodoBeforeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TodoBeforeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
