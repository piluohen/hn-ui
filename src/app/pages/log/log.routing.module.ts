import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LogComponent } from './log.component';

const routes: Routes = [
  {
    path: '',
    component: LogComponent,
    data: {
      breadcrumb: '如何使用'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LogRoutingModule {}
