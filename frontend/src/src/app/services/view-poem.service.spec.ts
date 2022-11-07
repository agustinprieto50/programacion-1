import { TestBed } from '@angular/core/testing';

import { ViewPoemService } from './view-poem.service';

describe('ViewPoemService', () => {
  let service: ViewPoemService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ViewPoemService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
