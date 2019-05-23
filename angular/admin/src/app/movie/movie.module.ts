import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';
import {PrimeModule} from 'src/app/prime/prime.module';
import {SharedModule} from 'src/app/shared/shared.module';

import { MovieRoutingModule } from './movie-routing.module';
import { IndexComponent } from './index/index.component';
import { ScanComponent } from './scan/scan.component';
import { FormComponent } from './form/form.component';

@NgModule({
  declarations: [IndexComponent, ScanComponent, FormComponent],
  imports: [
    CommonModule,
    MovieRoutingModule,
    SharedModule,
    PrimeModule,
    FormsModule
  ]
})
export class MovieModule { }
