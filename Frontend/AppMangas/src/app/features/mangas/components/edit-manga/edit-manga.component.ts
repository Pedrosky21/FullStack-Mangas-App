import { Component, EventEmitter } from '@angular/core';

import { Input, Output } from '@angular/core';


@Component({
  selector: 'app-edit-manga',
  templateUrl: './edit-manga.component.html',
  styleUrl: './edit-manga.component.scss'
})
export class EditMangaComponent {
  @Input() mostrarModal: any;
  @Output() cerrarModal = new EventEmitter <any>();
  
  @Input() mangaDatos: any;
  @Input() autores: any;
  @Input() estados: any;
  @Input() generos: any;
  @Output() enviarMangaDatos = new EventEmitter <any>();

  onCerrarModal() {
    this.cerrarModal.emit();
  }

  editarManga(manga: any) {
    console.log('Manga editado:', manga);
    this.enviarMangaDatos.emit(manga);
    this.onCerrarModal();
  }
}
