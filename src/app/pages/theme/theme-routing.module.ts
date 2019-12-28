import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ThemeComponent } from './theme.component';

const routes: Routes = [
  {
    path: '',
    component: ThemeComponent,
    data: {
      breadcrumb: '定制主题'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ThemeRoutingModule {}
