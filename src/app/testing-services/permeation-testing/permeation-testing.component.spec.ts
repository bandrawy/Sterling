import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PermeationTestingComponent } from './permeation-testing.component';

describe('PermeationTestingComponent', () => {
  let component: PermeationTestingComponent;
  let fixture: ComponentFixture<PermeationTestingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PermeationTestingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PermeationTestingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
