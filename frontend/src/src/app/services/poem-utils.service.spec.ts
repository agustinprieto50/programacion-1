import { TestBed } from '@angular/core/testing';

import { PoemUtilsService } from './poem-utils.service';

describe('PoemUtilsService', () => {
  let service: PoemUtilsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PoemUtilsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
