import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostServiceOffComponent } from './post-service-off.component';

describe('PostServiceOffComponent', () => {
  let component: PostServiceOffComponent;
  let fixture: ComponentFixture<PostServiceOffComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostServiceOffComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostServiceOffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
