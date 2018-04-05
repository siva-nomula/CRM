import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IconSociconComponent } from './icon-socicon.component';

describe('IconSociconComponent', () => {
  let component: IconSociconComponent;
  let fixture: ComponentFixture<IconSociconComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IconSociconComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IconSociconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
