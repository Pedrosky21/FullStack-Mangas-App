import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';

import { RouterModule } from '@angular/router';
import { FormMangasComponent } from './components/form-mangas/form-mangas.component';

import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    NavbarComponent,
    FormMangasComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  exports: [
    NavbarComponent,
    FormMangasComponent
  ]
})
export class SharedModule { }
