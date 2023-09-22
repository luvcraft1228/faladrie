import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HpTrackerComponent } from './hp-tracker.component';

describe('HpTrackerComponent', () => {
  let component: HpTrackerComponent;
  let fixture: ComponentFixture<HpTrackerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HpTrackerComponent]
    });
    fixture = TestBed.createComponent(HpTrackerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
