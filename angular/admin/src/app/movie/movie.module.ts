import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {PrimeModule} from 'src/app/prime/prime.module';
import {SharedModule} from 'src/app/shared/shared.module';

import { MovieRoutingModule } from './movie-routing.module';
import { IndexComponent } from './index/index.component';
import { ScanComponent } from './scan/scan.component';
import { FormMovieComponent } from './form-movie/form-movie.component';

@NgModule({
  declarations: [IndexComponent, ScanComponent, FormMovieComponent],
  imports: [
    CommonModule,
    MovieRoutingModule,
    SharedModule,
    PrimeModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class MovieModule { }
