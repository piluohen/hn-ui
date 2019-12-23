import { NgModule } from '@angular/core';
import { NgZorroModule } from '../ng-zorro.module';
import { HnTableComponent } from './hn-table.component';

@NgModule({
  imports: [
    NgZorroModule
  ],
  declarations: [
    HnTableComponent
  ],
  exports: [HnTableComponent]
})
export class HnTableModule { }
