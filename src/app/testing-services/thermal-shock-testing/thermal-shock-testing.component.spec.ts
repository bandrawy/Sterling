import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThermalShockTestingComponent } from './thermal-shock-testing.component';

describe('ThermalShockTestingComponent', () => {
  let component: ThermalShockTestingComponent;
  let fixture: ComponentFixture<ThermalShockTestingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThermalShockTestingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThermalShockTestingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
