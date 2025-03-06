import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrioriAhorroComponent } from './priori-ahorro.component';

describe('PrioriAhorroComponent', () => {
  let component: PrioriAhorroComponent;
  let fixture: ComponentFixture<PrioriAhorroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrioriAhorroComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PrioriAhorroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
