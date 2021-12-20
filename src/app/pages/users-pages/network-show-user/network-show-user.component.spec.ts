import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NetworkShowUserComponent } from './network-show-user.component';

describe('NetworkShowUserComponent', () => {
  let component: NetworkShowUserComponent;
  let fixture: ComponentFixture<NetworkShowUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NetworkShowUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NetworkShowUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
