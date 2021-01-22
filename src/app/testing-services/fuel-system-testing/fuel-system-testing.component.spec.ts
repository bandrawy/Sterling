import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FuelSystemTestingComponent } from './fuel-system-testing.component';

describe('FuelSystemTestingComponent', () => {
  let component: FuelSystemTestingComponent;
  let fixture: ComponentFixture<FuelSystemTestingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FuelSystemTestingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FuelSystemTestingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
