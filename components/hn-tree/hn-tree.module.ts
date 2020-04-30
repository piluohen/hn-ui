import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HnHighlightModule } from 'hn-ui/hn-highlight';
import { HnTreeComponent } from './hn-tree.component';
import { HnTreeNodeComponent } from './hn-tree-node.component';
import { NzIconModule, NzNoAnimationModule } from 'ng-zorro-antd';

@NgModule({
  imports: [CommonModule, NzIconModule, NzNoAnimationModule, HnHighlightModule],
  declarations: [HnTreeComponent, HnTreeNodeComponent],
  exports: [HnTreeComponent, HnTreeNodeComponent]
})
export class HnTreeModule {}
