import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AtivitylogComponent } from './ativitylog.component';

describe('AtivitylogComponent', () => {
  let component: AtivitylogComponent;
  let fixture: ComponentFixture<AtivitylogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AtivitylogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AtivitylogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
