import { Component, Input } from '@angular/core';
import { BreadcrumbComponent } from '../../molecules/breadcrumb/breadcrumb.component';

@Component({
  selector: 'app-title-page',
  standalone: true,
  imports: [BreadcrumbComponent],
  templateUrl: './title-page.component.html',
  styleUrl: './title-page.component.css',
})
export class TitlePageComponent {
  @Input() text = 'Título de la página';
  @Input() breadcrumb = true;
}
