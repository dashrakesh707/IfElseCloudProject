import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopdatacardComponent } from './topdatacard.component';

describe('TopdatacardComponent', () => {
  let component: TopdatacardComponent;
  let fixture: ComponentFixture<TopdatacardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TopdatacardComponent]
    });
    fixture = TestBed.createComponent(TopdatacardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
