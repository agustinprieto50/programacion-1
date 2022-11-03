import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingedInHeaderComponent } from './singed-in-header.component';

describe('SingedInHeaderComponent', () => {
  let component: SingedInHeaderComponent;
  let fixture: ComponentFixture<SingedInHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingedInHeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SingedInHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
