import { NgModule } from '@angular/core';
import { ShareModule } from 'src/app/share/share.module';

import { DemoRoutingModule } from './demo-routing.module';
import { DemoComponent } from './demo.component';

import { CountupComponent } from './countup/countup.component';
import { PreviewComponent } from './preview/preview.component';
import { ColorComponent } from './color/color.component';
import { ScrollListComponent } from './scroll-list/scroll-list.component';
import { ButtonComponent } from './button/button.component';
import { CheckboxGroupComponent } from './checkbox-group/checkbox-group.component';

import { TableComponent } from './table/table.component';
import { TableBaseComponent } from './table/table-base/table-base.component';
import { TableInterfaceComponent } from './table/table-interface/table-interface.component';
import { TableLocalComponent } from './table/table-local/table-local.component';
import { TableRenderComponent } from './table/table-render/table-render.component';
import { TableDropComponent } from './table/table-drop/table-drop.component';
import { TableVirtualComponent } from './table/table-virtual/table-virtual.component';
import { TableExpandComponent } from './table/table-expand/table-expand.component';

import { DetailListComponent } from './detail-list/detail-list.component';
import { ExportComponent } from './export/export.component';
import { SearchComponent } from './search/search.component';
import { FormComponent } from './form/form.component';
import { TreeComponent } from './tree/tree.component';
import { ImageComponent } from './image/image.component';

@NgModule({
  imports: [ShareModule, DemoRoutingModule],
  providers: [],
  declarations: [
    DemoComponent,
    CountupComponent,
    PreviewComponent,
    ColorComponent,
    ScrollListComponent,
    ButtonComponent,
    CheckboxGroupComponent,
    TableComponent,
    TableBaseComponent,
    TableInterfaceComponent,
    TableLocalComponent,
    TableRenderComponent,
    TableDropComponent,
    TableVirtualComponent,
    TableExpandComponent,
    DetailListComponent,
    ExportComponent,
    SearchComponent,
    FormComponent,
    TreeComponent,
    ImageComponent
  ],
  entryComponents: [DemoComponent]
})
export class DemoModule {}
