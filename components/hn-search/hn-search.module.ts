import { NgModule } from '@angular/core';
import { NgZorroModule } from '../ng-zorro.module';

import { HnSearchComponent } from './hn-search.component';

@NgModule({
  imports: [NgZorroModule],
  declarations: [HnSearchComponent],
  exports: [HnSearchComponent]
})
export class HnSearchModule {}
