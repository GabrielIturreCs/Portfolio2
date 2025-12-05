import { Routes } from '@angular/router';
import { HomePageComponent } from './features/home-page/home-page.component';
import { SolucionesComponent } from './features/soluciones/soluciones.component';

export const routes: Routes = [
    { path: '', component: HomePageComponent },
    { path: 'soluciones', component: SolucionesComponent },
    { path: '**', redirectTo: '' }
];
