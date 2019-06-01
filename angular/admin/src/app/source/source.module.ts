import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';
import {PrimeModule} from 'src/app/prime/prime.module';
import {SharedModule} from 'src/app/shared/shared.module';

import { SourceRoutingModule } from './source-routing.module';
import { IndexComponent } from './index/index.component';
import { RefreshComponent } from './refresh/refresh.component';

@NgModule({
  declarations: [IndexComponent, RefreshComponent],
  imports: [
    CommonModule,
    SourceRoutingModule,
    SharedModule,
    FormsModule,
    PrimeModule
  ]
})
export class SourceModule { }
