import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {IndexComponent} from 'src/app/movie/index/index.component';
import {ScanComponent} from 'src/app/movie/scan/scan.component';

const routes: Routes = [
  {
    path: '',
    component: IndexComponent
  },
  {
    path: 'scan',
    component: ScanComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MovieRoutingModule { }
