import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HnButtonModule } from 'hn-ui/hn-button';
import { HnExportComponent } from './hn-export.component';

@NgModule({
  imports: [CommonModule, HnButtonModule],
  declarations: [HnExportComponent],
  exports: [HnExportComponent]
})
export class HnExportModule {}
