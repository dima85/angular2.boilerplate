import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CompComponent } from './components/comp/comp.component';

const APP_ROUTES: Routes = [
  {
    path: '',
    component: CompComponent,
  }
];

export const APP_ROUTING: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
