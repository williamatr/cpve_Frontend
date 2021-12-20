import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminProjectMainComponent } from './admin-project-main.component';

describe('AdminProjectMainComponent', () => {
  let component: AdminProjectMainComponent;
  let fixture: ComponentFixture<AdminProjectMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminProjectMainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminProjectMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
