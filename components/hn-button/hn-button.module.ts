import { NgModule } from '@angular/core';
import { NgZorroModule } from '../ng-zorro.module';

import { HnButtonComponent } from './hn-button.component';

@NgModule({
  imports: [NgZorroModule],
  declarations: [HnButtonComponent],
  exports: [HnButtonComponent]
})
export class HnButtonModule {}
