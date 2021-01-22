import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomTestEquipmentComponent } from './custom-test-equipment.component';

describe('CustomTestEquipmentComponent', () => {
  let component: CustomTestEquipmentComponent;
  let fixture: ComponentFixture<CustomTestEquipmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomTestEquipmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomTestEquipmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
