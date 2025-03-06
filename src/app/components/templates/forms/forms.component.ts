export interface User {
  name: string;
  email: string;
}

import { Component } from '@angular/core';
import { TitlePageComponent } from '../../organisms/title-page/title-page.component';
import { NgIf } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-forms',
  standalone: true,
  imports: [TitlePageComponent, ReactiveFormsModule, NgIf],
  templateUrl: './forms.component.html',
  styleUrl: './forms.component.css',
})
export class FormsComponent {
  form: FormGroup;
  data: User[] = [];

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      name: [''],
      email: [''],
    });
  }

  onSubmit() {
    if (this.form.valid) {
      this.data.push({
        name: this.form.value.name,
        email: this.form.value.email,
      });
      localStorage.setItem('users', JSON.stringify(this.data));
      console.log('Variable' + this.data);
      console.log('LocalStorage' + localStorage.getItem('users'));
    }
    this.form.reset();
  }
}
