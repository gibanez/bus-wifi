import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {IndexComponent} from 'src/app/source/index/index.component';
import {RefreshComponent} from 'src/app/source/refresh/refresh.component';

const routes: Routes = [
  {
    path: '',
    component: IndexComponent
  },
  {
    path: 'actualizar',
    component: RefreshComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SourceRoutingModule { }
