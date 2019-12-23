import { NgModule } from '@angular/core';
import { NgZorroModule } from '../ng-zorro.module';

import { HnPreviewComponent } from './hn-preview.component';

@NgModule({
  imports: [NgZorroModule],
  declarations: [HnPreviewComponent],
  exports: [HnPreviewComponent]
})
export class HnPreviewModule {}
