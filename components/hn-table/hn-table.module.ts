import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NzTableModule } from 'ng-zorro-antd';
import { HnTableComponent } from './hn-table.component';

@NgModule({
  imports: [CommonModule, NzTableModule],
  declarations: [HnTableComponent],
  exports: [HnTableComponent]
})
export class HnTableModule {}
