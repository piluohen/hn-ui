import { NgModule } from '@angular/core';
import { NgZorroModule } from '../ng-zorro.module';

import { HnSearchComponent } from './hn-search.component';
import { HnFormModule } from '../hn-form/hn-form.module';

@NgModule({
  imports: [NgZorroModule, HnFormModule],
  declarations: [HnSearchComponent],
  exports: [HnSearchComponent]
})
export class HnSearchModule {}
