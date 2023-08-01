import { TestBed } from '@angular/core/testing';

import { DeletePoemService } from './delete-poem.service';

describe('DeletePoemService', () => {
  let service: DeletePoemService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeletePoemService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
