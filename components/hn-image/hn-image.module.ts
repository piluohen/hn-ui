import { NgModule } from '@angular/core';
import { NgZorroModule } from '../ng-zorro.module';

import { HnImageComponent } from './hn-image.component';

@NgModule({
  imports: [NgZorroModule],
  declarations: [HnImageComponent],
  exports: [HnImageComponent]
})
export class HnImageModule {}
