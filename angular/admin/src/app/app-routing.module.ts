import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'pelicula',
    loadChildren: './movie/movie.module#MovieModule'
  },
  {
    path: 'fuente',
    loadChildren: './source/source.module#SourceModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
