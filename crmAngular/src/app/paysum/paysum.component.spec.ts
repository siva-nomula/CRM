import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaysumComponent } from './paysum.component';

describe('PaysumComponent', () => {
  let component: PaysumComponent;
  let fixture: ComponentFixture<PaysumComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaysumComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaysumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
