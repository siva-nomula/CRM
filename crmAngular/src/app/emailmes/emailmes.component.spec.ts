import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailmesComponent } from './emailmes.component';

describe('EmailmesComponent', () => {
  let component: EmailmesComponent;
  let fixture: ComponentFixture<EmailmesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmailmesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmailmesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
