import { Route } from '@angular/router';
import { TabsPage } from './tabs.page';

export const tabsRoutes: Route[] = [
    {
      path: '', // Ruta vacía porque ya se carga en '/tabs'
      component: TabsPage,
      children: [
        {
          path: 'dolar',
          loadComponent: () =>
            import('../pages/dolar/dolar.page').then((m) => m.DolarPage),
        },
        {
          path: 'clima',
          loadComponent: () =>
            import('../pages/clima/clima.page').then((m) => m.ClimaPage),
        },
        {
          path: 'gastos', // Nueva ruta para la calculadora de gastos
          loadComponent: () =>
            import('../pages/gastos/gastos.page').then((m) => m.GastosPage),
        },
        {
          path: '',
          redirectTo: 'dolar', // Redirige a 'dolar' relativo a la ruta padre
          pathMatch: 'full',
        },
      ],
    },
  ];