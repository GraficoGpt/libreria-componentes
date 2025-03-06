import { Component, Input } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-chips',
  standalone: true,
  imports: [NgClass],
  templateUrl: './chips.component.html',
  styleUrl: './chips.component.css'
})
export class ChipsComponent {
  @Input() chipState: 'enabled' | 'active' | 'disabled' = 'enabled';
  @Input() chipText = 'Chip';
  @Input() chipIcon = 'icons/happy.svg';
  isActive = false;

  toggleActive() {
    this.isActive = !this.isActive;
    this.chipState = this.isActive ? 'active' : 'enabled';
  }
  handleKeyDown(event: KeyboardEvent) {
    if (event.key === 'Enter' || event.key === ' ') {
      this.toggleActive();
      event.preventDefault();
    }
  }
}
