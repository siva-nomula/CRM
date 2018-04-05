import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IncomexpComponent } from './incomexp.component';

describe('IncomexpComponent', () => {
  let component: IncomexpComponent;
  let fixture: ComponentFixture<IncomexpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IncomexpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IncomexpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
