import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddReviewBtnComponent } from './add-review-btn.component';

describe('AddReviewBtnComponent', () => {
  let component: AddReviewBtnComponent;
  let fixture: ComponentFixture<AddReviewBtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddReviewBtnComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddReviewBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
