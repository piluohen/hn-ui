import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HnScrollListComponent } from './hn-scroll-list.component';

@NgModule({
  imports: [CommonModule],
  declarations: [HnScrollListComponent],
  exports: [HnScrollListComponent]
})
export class HnScrollListModule {}
