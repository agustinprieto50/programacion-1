import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPoemBtnComponent } from './add-poem-btn.component';

describe('AddPoemBtnComponent', () => {
  let component: AddPoemBtnComponent;
  let fixture: ComponentFixture<AddPoemBtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddPoemBtnComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddPoemBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
