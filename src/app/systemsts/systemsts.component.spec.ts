import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SystemstsComponent } from './systemsts.component';

describe('SystemstsComponent', () => {
  let component: SystemstsComponent;
  let fixture: ComponentFixture<SystemstsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SystemstsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SystemstsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
