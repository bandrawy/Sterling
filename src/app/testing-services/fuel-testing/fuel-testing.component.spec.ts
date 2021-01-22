import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FuelTestingComponent } from './fuel-testing.component';

describe('FuelTestingComponent', () => {
  let component: FuelTestingComponent;
  let fixture: ComponentFixture<FuelTestingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FuelTestingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FuelTestingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
