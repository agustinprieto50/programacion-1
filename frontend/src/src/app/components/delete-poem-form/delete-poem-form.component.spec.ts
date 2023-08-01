import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletePoemFormComponent } from './delete-poem-form.component';

describe('DeletePoemFormComponent', () => {
  let component: DeletePoemFormComponent;
  let fixture: ComponentFixture<DeletePoemFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeletePoemFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeletePoemFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
