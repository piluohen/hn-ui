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
import { DetailListComponent } from './detail-list/detail-list.component';
import { ExportComponent } from './export/export.component';

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
    DetailListComponent,
    ExportComponent
  ],
  entryComponents: [DemoComponent]
})
export class DemoModule {}
