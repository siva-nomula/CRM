import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EreportComponent } from './ereport.component';

describe('EreportComponent', () => {
  let component: EreportComponent;
  let fixture: ComponentFixture<EreportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EreportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EreportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
