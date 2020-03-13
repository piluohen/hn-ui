import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NzIconModule } from 'ng-zorro-antd';
import { HnTableMsgComponent } from './hn-table-msg.component';

@NgModule({
  imports: [CommonModule, NzIconModule],
  declarations: [HnTableMsgComponent],
  exports: [HnTableMsgComponent]
})
export class HnTableMsgModule {}
