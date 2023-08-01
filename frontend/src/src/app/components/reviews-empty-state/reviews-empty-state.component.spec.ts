import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewsEmptyStateComponent } from './reviews-empty-state.component';

describe('ReviewsEmptyStateComponent', () => {
  let component: ReviewsEmptyStateComponent;
  let fixture: ComponentFixture<ReviewsEmptyStateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReviewsEmptyStateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReviewsEmptyStateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
