import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManstockComponent } from './manstock.component';

describe('ManstockComponent', () => {
  let component: ManstockComponent;
  let fixture: ComponentFixture<ManstockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManstockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManstockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
