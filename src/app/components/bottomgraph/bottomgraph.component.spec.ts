import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BottomgraphComponent } from './bottomgraph.component';

describe('BottomgraphComponent', () => {
  let component: BottomgraphComponent;
  let fixture: ComponentFixture<BottomgraphComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BottomgraphComponent]
    });
    fixture = TestBed.createComponent(BottomgraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
