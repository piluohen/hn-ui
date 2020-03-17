import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { NzIconModule, NzInputModule, NzButtonModule } from 'ng-zorro-antd';
import { HnFormModule } from 'hn-ui/hn-form';
import { HnSearchComponent } from './hn-search.component';

@NgModule({
  imports: [CommonModule, FormsModule, NzIconModule, NzInputModule, HnFormModule, NzButtonModule],
  declarations: [HnSearchComponent],
  exports: [HnSearchComponent]
})
export class HnSearchModule {}
