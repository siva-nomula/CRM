import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TicopenComponent } from './ticopen.component';

describe('TicopenComponent', () => {
  let component: TicopenComponent;
  let fixture: ComponentFixture<TicopenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TicopenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TicopenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
