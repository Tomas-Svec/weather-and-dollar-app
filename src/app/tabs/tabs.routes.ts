import { Route } from '@angular/router';
import { TabsPage } from './tabs.page';

export const tabsRoutes: Route[] = [
    {
      path: 'tabs',
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
          path: '',
          redirectTo: '/tabs/dolar', // Redirige a la pestaña del dólar por defecto
          pathMatch: 'full',
        },
      ],
    },
  ];