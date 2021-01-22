import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarbonTestingProceduresComponent } from './carbon-testing-procedures.component';

describe('CarbonTestingProceduresComponent', () => {
  let component: CarbonTestingProceduresComponent;
  let fixture: ComponentFixture<CarbonTestingProceduresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarbonTestingProceduresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarbonTestingProceduresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
