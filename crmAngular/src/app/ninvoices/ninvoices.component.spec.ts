import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NinvoicesComponent } from './ninvoices.component';

describe('NinvoicesComponent', () => {
  let component: NinvoicesComponent;
  let fixture: ComponentFixture<NinvoicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NinvoicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NinvoicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
