import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatosPlanComponent } from './datos-plan.component';

describe('DatosPlanComponent', () => {
  let component: DatosPlanComponent;
  let fixture: ComponentFixture<DatosPlanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DatosPlanComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DatosPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
