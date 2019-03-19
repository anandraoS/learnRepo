import { TestBed } from '@angular/core/testing';

import { Studnet.ServiceService } from './studnet.service.service';

describe('Studnet.ServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Studnet.ServiceService = TestBed.get(Studnet.ServiceService);
    expect(service).toBeTruthy();
  });
});
