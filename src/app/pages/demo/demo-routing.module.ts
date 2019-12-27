import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CountupComponent } from './countup/countup.component';
import { PreviewComponent } from './preview/preview.component';
import { ColorComponent } from './color/color.component';
import { ScrollListComponent } from './scroll-list/scroll-list.component';
import { ButtonComponent } from './button/button.component';
import { CheckboxGroupComponent } from './checkbox-group/checkbox-group.component';
import { TableComponent } from './table/table.component';
import { DetailListComponent } from './detail-list/detail-list.component';
import { ExportComponent } from './export/export.component';
import { SearchComponent } from './search/search.component';
import { FormComponent } from './form/form.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/demo/color',
    pathMatch: 'full'
  },
  {
    path: 'color',
    component: ColorComponent,
    data: {
      breadcrumb: '颜色'
    }
  },
  {
    path: 'hn-button',
    component: ButtonComponent,
    data: {
      breadcrumb: 'hn-button 组件'
    }
  },
  {
    path: 'hn-countup',
    component: CountupComponent,
    data: {
      breadcrumb: 'hn-countup 组件'
    }
  },
  {
    path: 'hn-preview',
    component: PreviewComponent,
    data: {
      breadcrumb: 'hn-preview 组件'
    }
  },
  {
    path: 'hn-checkbox-group',
    component: CheckboxGroupComponent,
    data: {
      breadcrumb: 'hn-checkbox-group 组件'
    }
  },
  {
    path: 'hn-scroll-list',
    component: ScrollListComponent,
    data: {
      breadcrumb: 'hn-scroll-list 组件'
    }
  },
  {
    path: 'hn-detail-list',
    component: DetailListComponent,
    data: {
      breadcrumb: 'hn-detail-list 组件'
    }
  },
  {
    path: 'hn-table',
    component: TableComponent,
    data: {
      breadcrumb: 'hn-table 组件'
    }
  },
  {
    path: 'hn-export',
    component: ExportComponent,
    data: {
      breadcrumb: 'hn-export 组件'
    }
  },
  {
    path: 'hn-search',
    component: SearchComponent,
    data: {
      breadcrumb: 'hn-search 组件'
    }
  },
  {
    path: 'hn-form',
    component: FormComponent,
    data: {
      breadcrumb: 'hn-form 组件'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DemoRoutingModule {}
