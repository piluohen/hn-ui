import { NgModule } from '@angular/core';
import { NgZorroModule } from '../ng-zorro.module';

import { HnCheckboxGroupComponent } from './hn-checkbox-group.component';


@NgModule({
  imports: [
    NgZorroModule
  ],
  declarations: [
    HnCheckboxGroupComponent
  ],
  exports: [HnCheckboxGroupComponent],

})
export class HnCheckboxGroupModule { }

