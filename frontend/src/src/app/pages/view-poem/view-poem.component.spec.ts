import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewPoemComponent } from './view-poem.component';

describe('ViewPoemComponent', () => {
  let component: ViewPoemComponent;
  let fixture: ComponentFixture<ViewPoemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewPoemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewPoemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
