import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreportComponent } from './preport.component';

describe('PreportComponent', () => {
  let component: PreportComponent;
  let fixture: ComponentFixture<PreportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
