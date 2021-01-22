import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnvironmentalTestingComponent } from './environmental-testing.component';

describe('EnvironmentalTestingComponent', () => {
  let component: EnvironmentalTestingComponent;
  let fixture: ComponentFixture<EnvironmentalTestingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnvironmentalTestingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnvironmentalTestingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
