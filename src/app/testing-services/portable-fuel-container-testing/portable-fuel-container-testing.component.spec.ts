import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortableFuelContainerTestingComponent } from './portable-fuel-container-testing.component';

describe('PortableFuelContainerTestingComponent', () => {
  let component: PortableFuelContainerTestingComponent;
  let fixture: ComponentFixture<PortableFuelContainerTestingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PortableFuelContainerTestingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PortableFuelContainerTestingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
