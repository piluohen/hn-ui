import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HnCountupComponent } from './hn-countup.component';

@NgModule({
  imports: [CommonModule],
  declarations: [HnCountupComponent],
  exports: [HnCountupComponent]
})
export class HnCountupModule {}
