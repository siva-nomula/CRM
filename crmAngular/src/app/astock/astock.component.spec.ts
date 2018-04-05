import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AstockComponent } from './astock.component';

describe('AstockComponent', () => {
  let component: AstockComponent;
  let fixture: ComponentFixture<AstockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AstockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AstockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
