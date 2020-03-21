import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexProjectsComponent } from './index-projects.component';

describe('IndexProjectsComponent', () => {
  let component: IndexProjectsComponent;
  let fixture: ComponentFixture<IndexProjectsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndexProjectsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
