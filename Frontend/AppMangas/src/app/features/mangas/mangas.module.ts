import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MangasRoutingModule } from './mangas-routing.module';
import { MangasPagesComponent } from './pages/mangas-pages/mangas-pages.component';

import { SharedModule } from '../../shared/shared.module';
import { CardMangaComponent } from './components/card-manga/card-manga.component';
import { SearchFormComponent } from './components/search-form/search-form.component';

import { FormsModule } from '@angular/forms';
import { EditMangaComponent } from './components/edit-manga/edit-manga.component';
import { DeleteMangaComponent } from './components/delete-manga/delete-manga.component';

import { AddMangaPageComponent } from './pages/add-manga-page/add-manga-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';


@NgModule({
  declarations: [
    MangasPagesComponent,
    CardMangaComponent,
    SearchFormComponent,
    EditMangaComponent,
    DeleteMangaComponent,
    AddMangaPageComponent
  ],
  imports: [
    CommonModule,
    MangasRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule
  ]
})
export class MangasModule { }
