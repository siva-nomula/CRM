import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IconsFlagComponent } from './icons-flag.component';

describe('IconsFlagComponent', () => {
  let component: IconsFlagComponent;
  let fixture: ComponentFixture<IconsFlagComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IconsFlagComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IconsFlagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
