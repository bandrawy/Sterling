import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewEngineSaleComponent } from './new-engine-sale.component';

describe('NewEngineSaleComponent', () => {
  let component: NewEngineSaleComponent;
  let fixture: ComponentFixture<NewEngineSaleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewEngineSaleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewEngineSaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
