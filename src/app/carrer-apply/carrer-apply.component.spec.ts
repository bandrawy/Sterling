import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarrerApplyComponent } from './carrer-apply.component';

describe('CarrerApplyComponent', () => {
  let component: CarrerApplyComponent;
  let fixture: ComponentFixture<CarrerApplyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarrerApplyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarrerApplyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
