import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BatteryTestingComponent } from './battery-testing.component';

describe('BatteryTestingComponent', () => {
  let component: BatteryTestingComponent;
  let fixture: ComponentFixture<BatteryTestingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BatteryTestingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BatteryTestingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
