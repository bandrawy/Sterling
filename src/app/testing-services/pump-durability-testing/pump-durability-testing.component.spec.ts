import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PumpDurabilityTestingComponent } from './pump-durability-testing.component';

describe('PumpDurabilityTestingComponent', () => {
  let component: PumpDurabilityTestingComponent;
  let fixture: ComponentFixture<PumpDurabilityTestingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PumpDurabilityTestingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PumpDurabilityTestingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
