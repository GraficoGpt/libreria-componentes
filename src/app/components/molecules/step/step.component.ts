import { NgClass, NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
@Component({
  selector: 'app-step',
  standalone: true,
  imports: [NgClass, NgIf],
  templateUrl: './step.component.html',
  styleUrl: './step.component.css',
})
export class StepComponent {
  @Input() number = 1;
  @Input() title = 'Titulo';
  @Input() subtitle = 'Subtitulo';
  @Input() active = false;
  @Input() completed = false;
}
