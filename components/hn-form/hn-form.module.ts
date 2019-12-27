import { NgModule } from '@angular/core';
import { NgZorroModule } from '../ng-zorro.module';

import { HnFormComponent } from './hn-form.component';
import { HnCheckboxGroupModule } from '../hn-checkbox-group/hn-checkbox-group.module';

@NgModule({
  imports: [NgZorroModule, HnCheckboxGroupModule],
  declarations: [HnFormComponent],
  exports: [HnFormComponent]
})
export class HnFormModule {}
