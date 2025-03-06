import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-toast',
  standalone: true,
  imports: [NgClass],
  templateUrl: './toast.component.html',
  styleUrl: './toast.component.css',
})
export class ToastComponent {
  @Input() type: 'info' | 'success' | 'warning' | 'error' = 'info';
  @Input() title = 'Toast title';
  @Input() description = 'Here is the description';

  // Objeto con URLs de íconos según el tipo
  iconUrls: Record<ToastComponent['type'], string> = {
    info: 'icons/info-icon.svg',
    success: 'icons/success-icon.svg',
    warning: 'icons/warning-icon.svg',
    error: 'icons/error-icon.svg',
  };

  // Etiquetas de los botones
  @Input() primaryButtonLabel = 'Aceptar';
  @Input() secondaryButtonLabel = 'Cancelar';

  // Eventos al hacer clic en los botones
  @Output() primaryButtonClick = new EventEmitter<void>();
  @Output() secondaryButtonClick = new EventEmitter<void>();

  get iconUrl(): string {
    return this.iconUrls[this.type];
  }
}
