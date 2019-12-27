import { NgModule } from '@angular/core';
import { NgZorroModule } from '../ng-zorro.module';

import { HnSearchComponent } from './hn-search.component';
import { HnCheckboxGroupModule } from '../hn-checkbox-group/hn-checkbox-group.module';

@NgModule({
  imports: [NgZorroModule, HnCheckboxGroupModule],
  declarations: [HnSearchComponent],
  exports: [HnSearchComponent]
})
export class HnSearchModule {}
