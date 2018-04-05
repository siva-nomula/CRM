import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IprocessComponent } from './iprocess.component';

describe('IprocessComponent', () => {
  let component: IprocessComponent;
  let fixture: ComponentFixture<IprocessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IprocessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IprocessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
