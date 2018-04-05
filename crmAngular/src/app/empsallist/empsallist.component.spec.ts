import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpsallistComponent } from './empsallist.component';

describe('EmpsallistComponent', () => {
  let component: EmpsallistComponent;
  let fixture: ComponentFixture<EmpsallistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmpsallistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpsallistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
