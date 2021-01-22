import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VibrationTestingComponent } from './vibration-testing.component';

describe('VibrationTestingComponent', () => {
  let component: VibrationTestingComponent;
  let fixture: ComponentFixture<VibrationTestingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VibrationTestingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VibrationTestingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
