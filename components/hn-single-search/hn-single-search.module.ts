import { NgModule } from '@angular/core';
import { NgZorroModule } from '../ng-zorro.module';

import { HnSingleSearchComponent } from './hn-single-search.component';

@NgModule({
  imports: [NgZorroModule],
  declarations: [HnSingleSearchComponent],
  exports: [HnSingleSearchComponent]
})
export class HnSingleSearchModule {}
