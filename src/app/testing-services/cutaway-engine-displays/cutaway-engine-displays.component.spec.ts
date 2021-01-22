import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CutawayEngineDisplaysComponent } from './cutaway-engine-displays.component';

describe('CutawayEngineDisplaysComponent', () => {
  let component: CutawayEngineDisplaysComponent;
  let fixture: ComponentFixture<CutawayEngineDisplaysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CutawayEngineDisplaysComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CutawayEngineDisplaysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
