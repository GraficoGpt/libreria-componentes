import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-input-text',
  standalone: true,
  imports: [FormsModule, NgClass],
  templateUrl: './input-text.component.html',
  styleUrl: './input-text.component.css'
})
export class InputTextComponent {
@Input() labelText = '';
@Input() type: 'text' | 'password' | 'email' = 'text';
@Input() placeholder = 'Placeholder';
@Input() disabled = false;
@Input() value = '';
@Input() name = '';
@Input() stateClass = '';

}
