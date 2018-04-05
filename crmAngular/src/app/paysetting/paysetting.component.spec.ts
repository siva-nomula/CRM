import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaysettingComponent } from './paysetting.component';

describe('PaysettingComponent', () => {
  let component: PaysettingComponent;
  let fixture: ComponentFixture<PaysettingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaysettingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaysettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
