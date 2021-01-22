import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CutawayEngineDisplayComponent } from './cutaway-engine-display.component';

describe('CutawayEngineDisplayComponent', () => {
  let component: CutawayEngineDisplayComponent;
  let fixture: ComponentFixture<CutawayEngineDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CutawayEngineDisplayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CutawayEngineDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
