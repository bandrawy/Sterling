import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderRacingEngineComponent } from './header-racing-engine.component';

describe('HeaderRacingEngineComponent', () => {
  let component: HeaderRacingEngineComponent;
  let fixture: ComponentFixture<HeaderRacingEngineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderRacingEngineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderRacingEngineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
