import { NgModule } from '@angular/core';
import { NgZorroModule } from '../ng-zorro.module';

import { HnHighlightModule } from '../hn-highlight/highlight.module';

import { HnTreeComponent } from './hn-tree.component';
import { HnTreeNodeComponent } from './hn-tree-node.component';

@NgModule({
  imports: [NgZorroModule, HnHighlightModule],
  declarations: [HnTreeComponent, HnTreeNodeComponent],
  exports: [HnTreeComponent, HnTreeNodeComponent]
})
export class HnTreeModule {}
