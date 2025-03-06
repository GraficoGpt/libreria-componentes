import { Component, Input } from '@angular/core';
import { ButtonComponent } from "../../atoms/button/button.component";

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css'
})
export class ModalComponent {
@Input() isOpen = true;
modalTitle = "Modal Title";

closeModal() {
  this.isOpen = !this.isOpen;
}
 // Manejar el evento de teclado
 handleKeydown(event: KeyboardEvent): void {
  if (event.key === 'Enter') {
    this.closeModal();
  }
}
}
