import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAwardEditComponent } from './admin-award-edit.component';

describe('AdminAwardEditComponent', () => {
  let component: AdminAwardEditComponent;
  let fixture: ComponentFixture<AdminAwardEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminAwardEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminAwardEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
