import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAwardMainComponent } from './admin-award-main.component';

describe('AdminAwardMainComponent', () => {
  let component: AdminAwardMainComponent;
  let fixture: ComponentFixture<AdminAwardMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminAwardMainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminAwardMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
