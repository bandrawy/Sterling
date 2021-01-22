import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RacingEngineComponent } from './racing-engine.component';

describe('RacingEngineComponent', () => {
  let component: RacingEngineComponent;
  let fixture: ComponentFixture<RacingEngineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RacingEngineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RacingEngineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
