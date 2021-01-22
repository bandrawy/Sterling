import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicleHoseTestingComponent } from './vehicle-hose-testing.component';

describe('VehicleHoseTestingComponent', () => {
  let component: VehicleHoseTestingComponent;
  let fixture: ComponentFixture<VehicleHoseTestingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VehicleHoseTestingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VehicleHoseTestingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
