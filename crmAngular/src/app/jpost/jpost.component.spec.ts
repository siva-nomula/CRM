import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JpostComponent } from './jpost.component';

describe('JpostComponent', () => {
  let component: JpostComponent;
  let fixture: ComponentFixture<JpostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JpostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JpostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
