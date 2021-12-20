import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StartUserComponent } from './start-user.component';

describe('StartUserComponent', () => {
  let component: StartUserComponent;
  let fixture: ComponentFixture<StartUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StartUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StartUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
