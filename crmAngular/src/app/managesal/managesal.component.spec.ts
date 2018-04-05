import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagesalComponent } from './managesal.component';

describe('ManagesalComponent', () => {
  let component: ManagesalComponent;
  let fixture: ComponentFixture<ManagesalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagesalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagesalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
