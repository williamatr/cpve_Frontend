import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AwardMainComponent } from './award-main.component';

describe('AwardMainComponent', () => {
  let component: AwardMainComponent;
  let fixture: ComponentFixture<AwardMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AwardMainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AwardMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
