import { TestBed } from '@angular/core/testing';

import { CanDeleteService } from './can-delete.service';

describe('CanDeleteService', () => {
  let service: CanDeleteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CanDeleteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
