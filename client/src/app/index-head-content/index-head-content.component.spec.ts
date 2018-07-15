import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexHeadContentComponent } from './index-head-content.component';

describe('IndexHeadContentComponent', () => {
  let component: IndexHeadContentComponent;
  let fixture: ComponentFixture<IndexHeadContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndexHeadContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexHeadContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
