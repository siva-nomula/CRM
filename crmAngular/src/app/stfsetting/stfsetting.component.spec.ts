import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StfsettingComponent } from './stfsetting.component';

describe('StfsettingComponent', () => {
  let component: StfsettingComponent;
  let fixture: ComponentFixture<StfsettingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StfsettingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StfsettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
