import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HoseTestingComponent } from './hose-testing.component';

describe('HoseTestingComponent', () => {
  let component: HoseTestingComponent;
  let fixture: ComponentFixture<HoseTestingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HoseTestingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HoseTestingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
