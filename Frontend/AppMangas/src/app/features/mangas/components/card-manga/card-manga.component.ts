import { Component, EventEmitter } from '@angular/core';

import { Input, Output } from '@angular/core';

@Component({
  selector: 'app-card-manga',
  templateUrl: './card-manga.component.html',
  styleUrl: './card-manga.component.scss'
})
export class CardMangaComponent {
  @Input() manga: any;
  @Output() mangaSelected = new EventEmitter <any>();

  // Si el parametro es true, se envia para borrar, caso contrario para editar
  sendMangaToPage(borrar: boolean = false) {
    this.mangaSelected.emit([this.manga, borrar]);
  }
}
