import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminEventMainComponent } from './admin-event-main.component';

describe('AdminEventMainComponent', () => {
  let component: AdminEventMainComponent;
  let fixture: ComponentFixture<AdminEventMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminEventMainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminEventMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
