import { Routes } from '@angular/router';
import { HomeComponent } from './components/templates/home/home.component';
import { DatosClienteComponent } from './formularios/priori-ahorro/datos-cliente/datos-cliente.component';
import { PrioriAhorroComponent } from './components/templates/priori-ahorro/priori-ahorro.component';

/* Formularios */
export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'priori-ahorro', component: PrioriAhorroComponent },
  {
    path: 'ahorro',
    component: DatosClienteComponent,
  },
];
