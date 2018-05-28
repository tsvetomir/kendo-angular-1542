import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GridModule, PDFModule} from '@progress/kendo-angular-grid';

import { LazyRoutingModule } from './lazy-routing.module';
import { IndexComponent } from './index/index.component';

@NgModule({
  imports: [
    CommonModule,
    GridModule,
    LazyRoutingModule,
    PDFModule
  ],
  declarations: [IndexComponent]
})
export class LazyModule { }
