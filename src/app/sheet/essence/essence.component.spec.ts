import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EssenceComponent } from './essence.component';

describe('EssenceComponent', () => {
  let component: EssenceComponent;
  let fixture: ComponentFixture<EssenceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EssenceComponent]
    });
    fixture = TestBed.createComponent(EssenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
