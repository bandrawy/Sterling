import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynoTestingComponent } from './dyno-testing.component';

describe('DynoTestingComponent', () => {
  let component: DynoTestingComponent;
  let fixture: ComponentFixture<DynoTestingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DynoTestingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DynoTestingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
