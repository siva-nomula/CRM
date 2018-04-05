import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IcheckTogglePaginationComponent } from './icheck-toggle-pagination.component';

describe('IcheckTogglePaginationComponent', () => {
  let component: IcheckTogglePaginationComponent;
  let fixture: ComponentFixture<IcheckTogglePaginationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IcheckTogglePaginationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IcheckTogglePaginationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
