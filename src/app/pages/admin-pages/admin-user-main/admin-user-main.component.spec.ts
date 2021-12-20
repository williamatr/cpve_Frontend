import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminUserMainComponent } from './admin-user-main.component';

describe('AdminUserMainComponent', () => {
  let component: AdminUserMainComponent;
  let fixture: ComponentFixture<AdminUserMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminUserMainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminUserMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
