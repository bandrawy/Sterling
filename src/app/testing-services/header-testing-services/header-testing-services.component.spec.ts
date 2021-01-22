import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderTestingServicesComponent } from './header-testing-services.component';

describe('HeaderTestingServicesComponent', () => {
  let component: HeaderTestingServicesComponent;
  let fixture: ComponentFixture<HeaderTestingServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderTestingServicesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderTestingServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
