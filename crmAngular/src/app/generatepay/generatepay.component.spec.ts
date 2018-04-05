import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneratepayComponent } from './generatepay.component';

describe('GeneratepayComponent', () => {
  let component: GeneratepayComponent;
  let fixture: ComponentFixture<GeneratepayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeneratepayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneratepayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
