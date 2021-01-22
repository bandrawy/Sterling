import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MagneticParticleInspectionComponent } from './magnetic-particle-inspection.component';

describe('MagneticParticleInspectionComponent', () => {
  let component: MagneticParticleInspectionComponent;
  let fixture: ComponentFixture<MagneticParticleInspectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MagneticParticleInspectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MagneticParticleInspectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
