import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TicanswerComponent } from './ticanswer.component';

describe('TicanswerComponent', () => {
  let component: TicanswerComponent;
  let fixture: ComponentFixture<TicanswerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TicanswerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TicanswerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
