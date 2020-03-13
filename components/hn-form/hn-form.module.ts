import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {
  NzFormModule,
  NzGridModule,
  NzInputModule,
  NzTimePickerModule,
  NzDatePickerModule,
  NzSelectModule,
  NzCascaderModule,
  NzTreeSelectModule,
  NzInputNumberModule,
  NzRadioModule,
  NzRateModule,
  NzSliderModule,
  NzSwitchModule
} from 'ng-zorro-antd';
import { HnFormComponent } from './hn-form.component';
import { HnCheckboxGroupModule } from 'hn-ui/hn-checkbox-group';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NzFormModule,
    ReactiveFormsModule,
    NzGridModule,
    NzInputModule,
    NzTimePickerModule,
    NzDatePickerModule,
    NzSelectModule,
    NzCascaderModule,
    NzTreeSelectModule,
    NzInputNumberModule,
    NzRadioModule,
    NzRateModule,
    NzSliderModule,
    NzSwitchModule,
    HnCheckboxGroupModule
  ],
  declarations: [HnFormComponent],
  exports: [HnFormComponent]
})
export class HnFormModule {}
