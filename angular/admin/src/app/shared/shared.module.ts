import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PrimeModule} from 'src/app/prime/prime.module';
import { HeaderComponentComponent } from './header-component/header-component.component';

@NgModule({
  declarations: [HeaderComponentComponent],
  imports: [
    CommonModule,
    PrimeModule
  ],
  exports: [
    HeaderComponentComponent
  ]
})
export class SharedModule { }
