import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IconsWeatherComponent } from './icons-weather.component';

describe('IconsWeatherComponent', () => {
  let component: IconsWeatherComponent;
  let fixture: ComponentFixture<IconsWeatherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IconsWeatherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IconsWeatherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
