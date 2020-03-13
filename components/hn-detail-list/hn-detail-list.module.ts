import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NzGridModule } from 'ng-zorro-antd';
import { HnDetailListComponent } from './hn-detail-list.component';

@NgModule({
  imports: [CommonModule, NzGridModule],
  declarations: [HnDetailListComponent],
  exports: [HnDetailListComponent]
})
export class HnDetailListModule {}
