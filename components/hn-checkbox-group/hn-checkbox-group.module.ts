import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NzCheckboxModule } from 'ng-zorro-antd';
import { HnCheckboxGroupComponent } from './hn-checkbox-group.component';

@NgModule({
  imports: [CommonModule, NzCheckboxModule],
  declarations: [HnCheckboxGroupComponent],
  exports: [HnCheckboxGroupComponent]
})
export class HnCheckboxGroupModule {}
