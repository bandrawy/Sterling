import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialsTestingComponent } from './materials-testing.component';

describe('MaterialsTestingComponent', () => {
  let component: MaterialsTestingComponent;
  let fixture: ComponentFixture<MaterialsTestingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaterialsTestingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaterialsTestingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
