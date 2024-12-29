import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MangasPagesComponent } from './pages/mangas-pages/mangas-pages.component';
import { AddMangaPageComponent } from './pages/add-manga-page/add-manga-page.component';

const routes: Routes = [
  { path: '', component: MangasPagesComponent },
  { path: 'add', component: AddMangaPageComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MangasRoutingModule { }
