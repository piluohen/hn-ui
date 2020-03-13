import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HnImgListComponent } from './hn-img-list.component';
import { HnPreviewModule } from 'hn-ui/hn-preview';
import { HnImageModule } from 'hn-ui/hn-image';

@NgModule({
  imports: [CommonModule, HnPreviewModule, HnImageModule],
  declarations: [HnImgListComponent],
  exports: [HnImgListComponent]
})
export class HnImgListModule {}
