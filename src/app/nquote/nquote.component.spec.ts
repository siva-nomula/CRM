import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NquoteComponent } from './nquote.component';

describe('NquoteComponent', () => {
  let component: NquoteComponent;
  let fixture: ComponentFixture<NquoteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NquoteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NquoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
