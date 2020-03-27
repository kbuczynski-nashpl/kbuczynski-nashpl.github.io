import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexWorkepxerienceComponent } from './index-workepxerience.component';

describe('IndexWorkepxerienceComponent', () => {
  let component: IndexWorkepxerienceComponent;
  let fixture: ComponentFixture<IndexWorkepxerienceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndexWorkepxerienceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexWorkepxerienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
