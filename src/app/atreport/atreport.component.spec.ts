import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AtreportComponent } from './atreport.component';

describe('AtreportComponent', () => {
  let component: AtreportComponent;
  let fixture: ComponentFixture<AtreportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AtreportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AtreportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
