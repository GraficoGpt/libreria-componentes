import { Component, Input } from '@angular/core';
import { BreadcrumbComponent } from '../../molecules/breadcrumb/breadcrumb.component';
import { ButtonComponent } from "../../atoms/button/button.component";


@Component({
  selector: 'app-heading',
  standalone: true,
  imports: [BreadcrumbComponent, ButtonComponent],
  templateUrl: './heading.component.html',
  styleUrl: './heading.component.css'
})
export class HeadingComponent {
  @Input() text = 'Título de la página';
  @Input() breadcrumb = true;
  @Input() actionBtn = true;
}
