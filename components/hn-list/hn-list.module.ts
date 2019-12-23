import { NgModule } from '@angular/core';
import { NgZorroModule } from '../ng-zorro.module';

import { HnListComponent } from './hn-list.component';

@NgModule({
  imports: [NgZorroModule],
  declarations: [HnListComponent],
  exports: [HnListComponent]
})
export class HnListModule {}
