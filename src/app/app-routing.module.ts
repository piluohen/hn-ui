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
    loadChildren: './pages/usage/usage.module#UsageModule',
    data: {
      breadcrumb: '如何使用'
    }
  },
  {
    path: 'theme',
    loadChildren: './pages/theme/theme.module#ThemeModule',
    data: {
      breadcrumb: '定制主题'
    }
  },
  {
    path: 'log',
    loadChildren: './pages/log/log.module#LogModule',
    data: {
      breadcrumb: '更新日志'
    }
  },
  {
    path: 'demo',
    loadChildren: './pages/demo/demo.module#DemoModule',
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
