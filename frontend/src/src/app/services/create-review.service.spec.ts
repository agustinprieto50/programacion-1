import { TestBed } from '@angular/core/testing';

import { CreateReviewService } from './create-review.service';

describe('CreateReviewService', () => {
  let service: CreateReviewService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreateReviewService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
