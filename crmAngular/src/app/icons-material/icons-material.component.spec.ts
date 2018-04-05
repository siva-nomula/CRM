import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IconsMaterialComponent } from './icons-material.component';

describe('IconsMaterialComponent', () => {
  let component: IconsMaterialComponent;
  let fixture: ComponentFixture<IconsMaterialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IconsMaterialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IconsMaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
