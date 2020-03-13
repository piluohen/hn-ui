import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { NzIconModule, NzInputModule, NzCheckboxModule, NzDatePickerModule } from 'ng-zorro-antd';
import { HnSingleSearchComponent } from './hn-single-search.component';

@NgModule({
  imports: [CommonModule, FormsModule, NzIconModule, NzInputModule, NzCheckboxModule, NzDatePickerModule],
  declarations: [HnSingleSearchComponent],
  exports: [HnSingleSearchComponent]
})
export class HnSingleSearchModule {}
