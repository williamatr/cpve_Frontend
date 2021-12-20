import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingShowOneComponent } from './training-show-one.component';

describe('TrainingShowOneComponent', () => {
  let component: TrainingShowOneComponent;
  let fixture: ComponentFixture<TrainingShowOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrainingShowOneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainingShowOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
