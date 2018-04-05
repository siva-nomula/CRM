import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaxeportComponent } from './taxeport.component';

describe('TaxeportComponent', () => {
  let component: TaxeportComponent;
  let fixture: ComponentFixture<TaxeportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaxeportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaxeportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
