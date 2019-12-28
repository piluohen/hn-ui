import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsageComponent } from './usage.component';

const routes: Routes = [
  {
    path: '',
    component: UsageComponent,
    data: {
      breadcrumb: '如何使用'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsageRoutingModule {}
