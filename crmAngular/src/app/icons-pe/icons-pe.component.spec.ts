import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IconsPeComponent } from './icons-pe.component';

describe('IconsPeComponent', () => {
  let component: IconsPeComponent;
  let fixture: ComponentFixture<IconsPeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IconsPeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IconsPeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
