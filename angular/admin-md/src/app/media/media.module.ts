import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MdModule} from 'src/app/md/md.module';

import { MediaRoutingModule } from './media-routing.module';
import { IndexComponent } from './index/index.component';

@NgModule({
  declarations: [IndexComponent],
  imports: [
    CommonModule,
    MediaRoutingModule,
    MdModule
  ],
  exports: [IndexComponent]
})
export class MediaModule { }
