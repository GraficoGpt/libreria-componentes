import { Component } from '@angular/core';
import { HeadingComponent } from "../../organisms/heading/heading.component";
import { ToastComponent } from "../../organisms/toast/toast.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeadingComponent,
    ToastComponent
],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
}
