import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DragDropModule } from '@angular/cdk/drag-drop';

import { NzTableModule } from 'ng-zorro-antd';
import { HnTableComponent } from './hn-table.component';

@NgModule({
  imports: [CommonModule, NzTableModule, DragDropModule],
  declarations: [HnTableComponent],
  exports: [HnTableComponent]
})
export class HnTableModule {}
