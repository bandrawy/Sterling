import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeliumLeakTestingComponent } from './helium-leak-testing.component';

describe('HeliumLeakTestingComponent', () => {
  let component: HeliumLeakTestingComponent;
  let fixture: ComponentFixture<HeliumLeakTestingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeliumLeakTestingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeliumLeakTestingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
