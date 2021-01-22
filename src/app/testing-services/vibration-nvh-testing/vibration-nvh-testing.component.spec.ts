import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VibrationNvhTestingComponent } from './vibration-nvh-testing.component';

describe('VibrationNvhTestingComponent', () => {
  let component: VibrationNvhTestingComponent;
  let fixture: ComponentFixture<VibrationNvhTestingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VibrationNvhTestingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VibrationNvhTestingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
