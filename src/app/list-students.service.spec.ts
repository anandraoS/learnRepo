import { TestBed } from '@angular/core/testing';

import { ListStudentsService } from './list-students.service';

describe('ListStudentsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ListStudentsService = TestBed.get(ListStudentsService);
    expect(service).toBeTruthy();
  });
});
