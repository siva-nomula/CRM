import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RtaskComponent } from './rtask.component';

describe('RtaskComponent', () => {
  let component: RtaskComponent;
  let fixture: ComponentFixture<RtaskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RtaskComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RtaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
