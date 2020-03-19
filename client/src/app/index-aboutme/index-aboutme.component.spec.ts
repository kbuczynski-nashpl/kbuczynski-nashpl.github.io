import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexAboutmeComponent } from './index-aboutme.component';

describe('IndexAboutmeComponent', () => {
  let component: IndexAboutmeComponent;
  let fixture: ComponentFixture<IndexAboutmeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndexAboutmeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexAboutmeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
