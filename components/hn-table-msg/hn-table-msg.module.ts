import { NgModule } from '@angular/core';
import { NgZorroModule } from '../ng-zorro.module';

import { HnTableMsgComponent } from './hn-table-msg.component';

@NgModule({
  imports: [NgZorroModule],
  declarations: [HnTableMsgComponent],
  exports: [HnTableMsgComponent]
})
export class HnTableMsgModule {}
