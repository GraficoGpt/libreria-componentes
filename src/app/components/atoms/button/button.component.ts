import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [NgClass],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css',
})
export class ButtonComponent {
  @Input() size: 'sdp-btn--small' | 'sdp-btn--medium' | 'sdp-btn--large' = 'sdp-btn--medium';
  @Input() type: 'sdp-btn--primary' | 'sdp-btn--secondary' | 'sdp-btn--text' = 'sdp-btn--primary';
  @Input() typebtn: 'submit' | 'button' = 'button';
  @Input() buttontext?: string = "Button";
  @Input() iconLeft?: string;
  @Input() iconRight?: string;
  @Input() customClass?: string = '';

  // Definir la propiedad de salida para el evento click
  // eslint-disable-next-line @angular-eslint/no-output-on-prefix
  @Output() onClick: EventEmitter<Event> = new EventEmitter<Event>();

  // Método para manejar el clic y emitir el evento
  handleClick(event: Event): void {
    this.onClick.emit(event);
  }
}


