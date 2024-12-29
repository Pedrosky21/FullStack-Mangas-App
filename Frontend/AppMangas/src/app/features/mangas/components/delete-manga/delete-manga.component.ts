import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-delete-manga',
  templateUrl: './delete-manga.component.html',
  styleUrl: './delete-manga.component.scss'
})
export class DeleteMangaComponent {
  @Input() mostrarModal: any;
  @Output() cerrarModal = new EventEmitter <any>();

  @Input() manga: any;
  @Output() enviarIDManga = new EventEmitter <any>();

  onCerrarModal() {
    this.cerrarModal.emit();
  }

  borrarManga(manga: any) {
    console.log('Manga eliminado:', manga);
    this.enviarIDManga.emit(manga.id);
    this.onCerrarModal();
  }
}
