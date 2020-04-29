import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import {LoginComponent} from './business/login/login.component';

const appRoutes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/usage'
  },
  {
    path: 'usage',
    loadChildren: () => import('./pages/usage/usage.module').then(m => m.UsageModule),
    data: {
      breadcrumb: '如何使用'
    }
  },
  {
    path: 'theme',
    loadChildren: () => import('./pages/theme/theme.module').then(m => m.ThemeModule),
    data: {
      breadcrumb: '定制主题'
    }
  },
  {
    path: 'log',
    loadChildren: () => import('./pages/log/log.module').then(m => m.LogModule),
    data: {
      breadcrumb: '更新日志'
    }
  },
  {
    path: 'demo',
    loadChildren: () => import('./pages/demo/demo.module').then(m => m.DemoModule),
    data: {
      breadcrumb: '组件'
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
