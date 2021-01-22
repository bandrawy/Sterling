import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerformanceDurabilityReliabilityTestingComponent } from './performance-durability-reliability-testing.component';

describe('PerformanceDurabilityReliabilityTestingComponent', () => {
  let component: PerformanceDurabilityReliabilityTestingComponent;
  let fixture: ComponentFixture<PerformanceDurabilityReliabilityTestingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PerformanceDurabilityReliabilityTestingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PerformanceDurabilityReliabilityTestingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
