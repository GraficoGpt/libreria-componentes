import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NgFor } from '@angular/common';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-select',
  standalone: true,
  imports: [NgFor, ReactiveFormsModule],
  templateUrl: './select.component.html',
  styleUrl: './select.component.css',
})
export class SelectComponent {
  @Input() options: { label: string; value: string }[] = [];
  @Input() label = '';
  @Output() selectionChange: EventEmitter<unknown> =
    new EventEmitter<unknown>();

  selectedValue: unknown;
  @Input() control!: FormControl;

  onSelectChange(event: Event): void {
    this.selectionChange.emit(this.selectedValue);
    console.log(event);
    console.log(this.selectedValue);
  }
}
