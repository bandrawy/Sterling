import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LearnAboutRacingComponent } from './learn-about-racing.component';

describe('LearnAboutRacingComponent', () => {
  let component: LearnAboutRacingComponent;
  let fixture: ComponentFixture<LearnAboutRacingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LearnAboutRacingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LearnAboutRacingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
