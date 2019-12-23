import { NgModule } from '@angular/core';
import { NgZorroModule } from '../ng-zorro.module';

import { HnImgListComponent } from './hn-img-list.component';
import { HnPreviewModule } from '../hn-preview/hn-preview.module';

@NgModule({
  imports: [NgZorroModule, HnPreviewModule],
  declarations: [HnImgListComponent],
  exports: [HnImgListComponent]
})
export class HnImgListModule {}
