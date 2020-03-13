import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NzEmptyModule, NzIconModule } from 'ng-zorro-antd';
import { HnListComponent } from './hn-list.component';

@NgModule({
  imports: [CommonModule, NzIconModule, NzEmptyModule],
  declarations: [HnListComponent],
  exports: [HnListComponent]
})
export class HnListModule {}
