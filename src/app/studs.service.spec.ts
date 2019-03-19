import { TestBed } from '@angular/core/testing';

import { StudsService } from './studs.service';

describe('StudsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StudsService = TestBed.get(StudsService);
    expect(service).toBeTruthy();
  });
});
