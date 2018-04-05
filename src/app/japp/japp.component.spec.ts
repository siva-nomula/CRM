import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JappComponent } from './japp.component';

describe('JappComponent', () => {
  let component: JappComponent;
  let fixture: ComponentFixture<JappComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JappComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JappComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
