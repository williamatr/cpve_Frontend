import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogShowOneComponent } from './blog-show-one.component';

describe('BlogShowOneComponent', () => {
  let component: BlogShowOneComponent;
  let fixture: ComponentFixture<BlogShowOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogShowOneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogShowOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
