import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FormComponent} from 'src/app/movie/form/form.component';
import {IndexComponent} from 'src/app/movie/index/index.component';
import {ScanComponent} from 'src/app/movie/scan/scan.component';

const routes: Routes = [
  {
    path: '',
    component: IndexComponent
  },
  {
    path: 'crear',
    component: FormComponent
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
