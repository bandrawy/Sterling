import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutomotiveFluidsTestingComponent } from './automotive-fluids-testing.component';

describe('AutomotiveFluidsTestingComponent', () => {
  let component: AutomotiveFluidsTestingComponent;
  let fixture: ComponentFixture<AutomotiveFluidsTestingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AutomotiveFluidsTestingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AutomotiveFluidsTestingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
