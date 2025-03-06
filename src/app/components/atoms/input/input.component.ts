import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './input.component.html',
  styleUrl: './input.component.css',
})
export class InputComponent {
  @Input() id!: string;
  @Input() labelText!: string;
  @Input() type = 'text';
  @Input() controlName!: string;
  @Input() control!: FormControl;
  @Input() placeholder = 'Placeholder';
}
