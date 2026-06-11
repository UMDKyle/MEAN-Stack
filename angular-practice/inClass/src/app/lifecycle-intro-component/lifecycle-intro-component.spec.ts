import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LifecycleIntroComponent } from './lifecycle-intro-component';

describe('LifecycleIntroComponent', () => {
  let component: LifecycleIntroComponent;
  let fixture: ComponentFixture<LifecycleIntroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LifecycleIntroComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LifecycleIntroComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
