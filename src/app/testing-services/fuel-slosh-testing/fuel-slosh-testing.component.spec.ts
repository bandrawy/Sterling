import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FuelSloshTestingComponent } from './fuel-slosh-testing.component';

describe('FuelSloshTestingComponent', () => {
  let component: FuelSloshTestingComponent;
  let fixture: ComponentFixture<FuelSloshTestingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FuelSloshTestingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FuelSloshTestingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
