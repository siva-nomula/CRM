import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StockcatComponent } from './stockcat.component';

describe('StockcatComponent', () => {
  let component: StockcatComponent;
  let fixture: ComponentFixture<StockcatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StockcatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StockcatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
