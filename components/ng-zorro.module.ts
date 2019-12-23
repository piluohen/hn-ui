import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {
  NZ_I18N,
  zh_CN,
  NzIconModule,
  NzCarouselModule,
  NzModalModule,
  NzButtonModule,
  NzCheckboxModule,
  NzTableModule,
  NzInputModule,
  NzDatePickerModule,
  NzFormModule,
  NzGridModule,
  NzTimePickerModule,
  NzEmptyModule,
  NzSelectModule,
  NzCascaderModule,
  NzTreeModule,
  NzTreeSelectModule,
  NzInputNumberModule
} from 'ng-zorro-antd';

const ngZorro = [
  NzIconModule,
  NzCarouselModule,
  NzModalModule,
  NzButtonModule,
  NzCheckboxModule,
  NzTableModule,
  NzInputModule,
  NzDatePickerModule,
  NzFormModule,
  NzGridModule,
  NzTimePickerModule,
  NzEmptyModule,
  NzSelectModule,
  NzCascaderModule,
  NzTreeModule,
  NzTreeSelectModule,
  NzInputNumberModule
];

@NgModule({
  imports: [CommonModule, FormsModule, ReactiveFormsModule, ...ngZorro],
  declarations: [],
  providers: [{ provide: NZ_I18N, useValue: zh_CN }],
  exports: [CommonModule, FormsModule, ReactiveFormsModule, ...ngZorro]
})
export class NgZorroModule {}
