/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HnHighlightPipe } from './highlight.pipe';

@NgModule({
  imports: [CommonModule],
  exports: [HnHighlightPipe],
  declarations: [HnHighlightPipe]
})
export class HnHighlightModule {}
