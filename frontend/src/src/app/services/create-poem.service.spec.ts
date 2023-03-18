import { TestBed } from '@angular/core/testing';

import { CreatePoemService } from './create-poem.service';

describe('CreatePoemService', () => {
  let service: CreatePoemService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreatePoemService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
