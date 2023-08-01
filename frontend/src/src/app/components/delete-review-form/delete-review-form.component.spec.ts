import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteReviewFormComponent } from './delete-review-form.component';

describe('DeleteReviewFormComponent', () => {
  let component: DeleteReviewFormComponent;
  let fixture: ComponentFixture<DeleteReviewFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteReviewFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteReviewFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
