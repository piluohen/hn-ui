import { NgModule } from '@angular/core';
import { NgZorroModule } from '../ng-zorro.module';

import { HnPreviewModule } from '../hn-preview/hn-preview.module';

import { HnImageComponent } from './hn-image.component';

@NgModule({
  imports: [NgZorroModule, HnPreviewModule],
  declarations: [HnImageComponent],
  exports: [HnImageComponent]
})
export class HnImageModule {}
