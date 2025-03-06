import { Component } from '@angular/core';
import { TitlePageComponent } from '../../../components/organisms/title-page/title-page.component';
import { StepperComponent } from '../../../components/organisms/stepper/stepper.component';
import { InputComponent } from '../../../components/atoms/input/input.component';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
  FormControl,
} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SelectComponent } from '../../../components/atoms/select/select.component';
import { ButtonComponent } from "../../../components/atoms/button/button.component";

@Component({
  selector: 'app-datos-cliente',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    TitlePageComponent,
    StepperComponent,
    InputComponent,
    SelectComponent,
    ButtonComponent
],
  templateUrl: './datos-cliente.component.html',
  styleUrl: './datos-cliente.component.css',
})
export class DatosClienteComponent {
  // Título de la página
  title = 'Candidato';
  // Stepper
  stepperItems = [
    { title: 'Candidato', subtitle: '' },
    { title: 'Producto', subtitle: '' },
    { title: 'Completado', subtitle: '' },

  ];
  current = 2;
  // Formulario
  clienteForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.clienteForm = this.fb.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      telefono: ['', Validators.required],
      nacimiento: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      frecuenciaPago: ['', Validators.required],
    });
  }

  getControl(controlName: string): FormControl {
    const control = this.clienteForm.get(controlName);
    if (control instanceof FormControl) {
      return control;
    }
    throw new Error(`Control ${controlName} is not a FormControl`);
  }

  onSubmit() {
    if (this.clienteForm.valid) {
      // Obtener los datos existentes en el localStorage
      const storedData = localStorage.getItem('datosCliente');

      // Inicializar datosClientes como un array vacío si storedData es null
      let datosClientes: any[] = storedData ? JSON.parse(storedData) : [];

      // Verificar si datosClientes es un array
      if (!Array.isArray(datosClientes)) {
        datosClientes = []; // Reinicializar si los datos no son un array válido
      }

      // Agregar los nuevos datos al array
      datosClientes.push(this.clienteForm.value);

      // Guardar el array actualizado en el localStorage
      localStorage.setItem('datosCliente', JSON.stringify(datosClientes));

      // Confirmación de éxito en la consola
      console.log('Formulario enviado con éxito:', this.clienteForm.value);

      // Notificación al usuario
      alert('Datos guardados correctamente');
    } else {
      console.error('Error: Formulario no es válido');
      console.table(this.getFormValidationErrors());
    }

    // Restablecer el formulario
    this.clienteForm.reset();
  }
  getFormValidationErrors() {
    const errors: unknown[] = [];
    Object.keys(this.clienteForm.controls).forEach((key) => {
      const controlErrors = this.clienteForm.get(key)?.errors;
      if (controlErrors) {
        Object.keys(controlErrors).forEach((keyError) => {
          errors.push({
            control: key,
            error: keyError,
            value: controlErrors[keyError],
          });
        });
      }
    });
    return errors;
  }

  optionsSelect = [
    { label: 'Opción 1', value: '1' },
    { label: 'Opción 2', value: '2' },
    { label: 'Opción 3', value: '3' },
  ];
}
