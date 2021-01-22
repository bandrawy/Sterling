import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TensileTestingComponent } from './tensile-testing.component';

describe('TensileTestingComponent', () => {
  let component: TensileTestingComponent;
  let fixture: ComponentFixture<TensileTestingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TensileTestingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TensileTestingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
