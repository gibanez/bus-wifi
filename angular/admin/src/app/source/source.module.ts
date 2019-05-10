import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PrimeModule} from 'src/app/prime/prime.module';
import {SharedModule} from 'src/app/shared/shared.module';

import { SourceRoutingModule } from './source-routing.module';
import { IndexComponent } from './index/index.component';

@NgModule({
  declarations: [IndexComponent],
  imports: [
    CommonModule,
    SourceRoutingModule,
    SharedModule,
    PrimeModule
  ]
})
export class SourceModule { }
