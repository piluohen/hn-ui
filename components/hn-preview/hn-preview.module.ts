import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NzModalModule } from 'ng-zorro-antd';
import { HnPreviewComponent } from './hn-preview.component';

@NgModule({
  imports: [CommonModule, NzModalModule],
  declarations: [HnPreviewComponent],
  exports: [HnPreviewComponent]
})
export class HnPreviewModule {}
