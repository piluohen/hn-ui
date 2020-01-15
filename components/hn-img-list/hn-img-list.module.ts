import { NgModule } from '@angular/core';
import { NgZorroModule } from '../ng-zorro.module';

import { HnImgListComponent } from './hn-img-list.component';
import { HnPreviewModule } from '../hn-preview/hn-preview.module';
import { HnImageModule } from '../hn-image/hn-image.module';

@NgModule({
  imports: [NgZorroModule, HnPreviewModule, HnImageModule],
  declarations: [HnImgListComponent],
  exports: [HnImgListComponent]
})
export class HnImgListModule {}
