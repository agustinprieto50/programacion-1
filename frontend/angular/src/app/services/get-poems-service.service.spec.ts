import { TestBed } from '@angular/core/testing';

import { GetPoemsServiceService } from './get-poems-service.service';

describe('GetPoemsServiceService', () => {
  let service: GetPoemsServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetPoemsServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
