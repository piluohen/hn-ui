import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NzIconModule, NzButtonModule } from 'ng-zorro-antd';
import { HnButtonComponent } from './hn-button.component';

@NgModule({
  imports: [CommonModule, NzIconModule, NzButtonModule],
  declarations: [HnButtonComponent],
  exports: [HnButtonComponent]
})
export class HnButtonModule {}
