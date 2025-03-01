
import { provideRouter, Routes } from '@angular/router';


export const routes: Routes = [
  {
    path: '',
    redirectTo: '/tabs/dolar', // Redirige a la pestaña del dólar por defecto
    pathMatch: 'full',
  },
  {
    path: 'tabs',
    loadChildren: () => import('./tabs/tabs.routes').then((m) => m.tabsRoutes),
  },
  {
    path: 'gastos',
    loadComponent: () => import('./pages/gastos/gastos.page').then( m => m.GastosPage)
  },
];



// Exporta las rutas para usarlas en main.ts
export const appConfig = {
  providers: [provideRouter(routes)],
};