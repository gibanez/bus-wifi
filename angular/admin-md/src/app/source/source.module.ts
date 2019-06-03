import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MdModule} from 'src/app/md/md.module';

import { SourceRoutingModule } from './source-routing.module';
import { IndexComponent } from './index/index.component';
import { RefreshComponent } from './refresh/refresh.component';

@NgModule({
  declarations: [IndexComponent, RefreshComponent],
  imports: [
    CommonModule,
    SourceRoutingModule,
    MdModule
  ]
})
export class SourceModule { }
