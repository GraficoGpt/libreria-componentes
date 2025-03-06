import { Component, Input } from '@angular/core';
import { ButtonComponent } from "../../atoms/button/button.component";
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [ButtonComponent, NgClass],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  @Input() cardImage = "icons/happy.svg";
  @Input() cardTitle = "Card Title";
  @Input() cardBody = "Card Description";
  @Input() cardButtonText = "Button";
  @Input() cardType: "sdp-card-primary" | "sdp-card-secondary" = "sdp-card-primary";
}

