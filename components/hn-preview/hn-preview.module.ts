import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NzModalModule, NzIconModule } from 'ng-zorro-antd';
import { HnPreviewComponent } from './hn-preview.component';

@NgModule({
  imports: [CommonModule, NzModalModule, NzIconModule],
  declarations: [HnPreviewComponent],
  exports: [HnPreviewComponent]
})
export class HnPreviewModule {}
