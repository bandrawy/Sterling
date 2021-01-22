import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvaporativeEmissionTestingComponent } from './evaporative-emission-testing.component';

describe('EvaporativeEmissionTestingComponent', () => {
  let component: EvaporativeEmissionTestingComponent;
  let fixture: ComponentFixture<EvaporativeEmissionTestingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EvaporativeEmissionTestingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EvaporativeEmissionTestingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
