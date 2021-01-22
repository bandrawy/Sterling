import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamometerTestingComponent } from './dynamometer-testing.component';

describe('DynamometerTestingComponent', () => {
  let component: DynamometerTestingComponent;
  let fixture: ComponentFixture<DynamometerTestingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DynamometerTestingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamometerTestingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
