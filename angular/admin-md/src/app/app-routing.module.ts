import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'pelicula',
    loadChildren: './media/media.module#MediaModule'
  },
  {
    path: 'fuente',
    loadChildren: './source/source.module#SourceModule'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
