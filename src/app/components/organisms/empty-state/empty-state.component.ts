import { Component, Input } from '@angular/core';
import { ButtonComponent } from "../../atoms/button/button.component";

@Component({
  selector: 'app-empty-state',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './empty-state.component.html',
  styleUrl: './empty-state.component.css'
})
export class EmptyStateComponent {
@Input() icon = "icons/happy.svg";
@Input() title = "Empty State title";
@Input() description = "Empty status feedback text, we have to tell the user what action to take.";

}
