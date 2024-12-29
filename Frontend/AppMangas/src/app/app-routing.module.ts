import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./features/inicio/inicio.module').
    then(m => m.InicioModule)
  },
  {
    path: 'mangas',
    loadChildren: () => import('./features/mangas/mangas.module').
    then(m => m.MangasModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
