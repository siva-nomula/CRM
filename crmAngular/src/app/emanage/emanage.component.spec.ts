import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmanageComponent } from './emanage.component';

describe('EmanageComponent', () => {
  let component: EmanageComponent;
  let fixture: ComponentFixture<EmanageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmanageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmanageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
