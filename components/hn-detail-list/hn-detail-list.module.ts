import { NgModule } from '@angular/core';
import { NgZorroModule } from '../ng-zorro.module';

import { HnDetailListComponent } from './hn-detail-list.component';

@NgModule({
  imports: [NgZorroModule],
  declarations: [HnDetailListComponent],
  exports: [HnDetailListComponent]
})
export class HnDetailListModule {}
