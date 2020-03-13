import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NzEmptyModule } from 'ng-zorro-antd';
import { HnImageComponent } from './hn-image.component';

@NgModule({
  imports: [CommonModule, NzEmptyModule],
  declarations: [HnImageComponent],
  exports: [HnImageComponent]
})
export class HnImageModule {}
