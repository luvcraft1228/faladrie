import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillLineComponent } from './skill-line.component';

describe('SkillLineComponent', () => {
  let component: SkillLineComponent;
  let fixture: ComponentFixture<SkillLineComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SkillLineComponent]
    });
    fixture = TestBed.createComponent(SkillLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
