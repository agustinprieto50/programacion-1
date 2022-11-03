import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPoemFormComponent } from './add-poem-form.component';

describe('AddPoemFormComponent', () => {
  let component: AddPoemFormComponent;
  let fixture: ComponentFixture<AddPoemFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddPoemFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddPoemFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
