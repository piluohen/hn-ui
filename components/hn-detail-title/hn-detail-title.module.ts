import { NgModule } from '@angular/core';
import { NgZorroModule } from '../ng-zorro.module';

import { HnDetailTitleComponent } from './hn-detail-title.component';

@NgModule({
  imports: [NgZorroModule],
  declarations: [HnDetailTitleComponent],
  exports: [HnDetailTitleComponent]
})
export class HnDetailTitleModule {}
