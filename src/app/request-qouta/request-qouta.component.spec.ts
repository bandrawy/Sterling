import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestQoutaComponent } from './request-qouta.component';

describe('RequestQoutaComponent', () => {
  let component: RequestQoutaComponent;
  let fixture: ComponentFixture<RequestQoutaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequestQoutaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestQoutaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
