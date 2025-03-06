import { Component, Input } from '@angular/core';
import { NgFor } from '@angular/common';
import { StepComponent } from '../../molecules/step/step.component';

@Component({
  selector: 'app-stepper',
  standalone: true,
  imports: [NgFor, StepComponent],
  templateUrl: './stepper.component.html',
  styleUrl: './stepper.component.css',
})
export class StepperComponent {
  @Input() steps: { title: string; subtitle: string }[] = [];
  @Input() currentStep = 0;
}
