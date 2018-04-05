import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IconsLineComponent } from './icons-line.component';

describe('IconsLineComponent', () => {
  let component: IconsLineComponent;
  let fixture: ComponentFixture<IconsLineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IconsLineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IconsLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
