import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectShowOneComponent } from './project-show-one.component';

describe('ProjectShowOneComponent', () => {
  let component: ProjectShowOneComponent;
  let fixture: ComponentFixture<ProjectShowOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectShowOneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectShowOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
