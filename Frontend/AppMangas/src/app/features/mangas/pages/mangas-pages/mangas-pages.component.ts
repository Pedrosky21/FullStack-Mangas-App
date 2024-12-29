import { Component } from '@angular/core';

import { MangasApiService } from '../../../../core/services/mangas/mangas-api.service';
import { AutoresApiService } from '../../../../core/services/autores/autores-api.service';
import { EstadosApiService } from '../../../../core/services/estados/estados-api.service';
import { GenerosApiService } from '../../../../core/services/generos/generos-api.service';

/* 
Para cambiar manga.autor que es la id por el nombre
se necesita que todos los mangas y todos los autores
esten ya cargados, para eso se utiliza forkJoin
*/
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-mangas-pages',
  templateUrl: './mangas-pages.component.html',
  styleUrl: './mangas-pages.component.scss'
})

export class MangasPagesComponent {
  mangas: any[] = [];
  autores: any[] = [];
  estados: any[] = [];
  generos: any[] = [];
  
  params = {
    page: 1,
    titulo: "",
    autor: "",
    estado: "",
    genero: ""
  }

  mostrarModalEdit: boolean = false;
  mostrarModalDel: boolean = false;

  mangaSeleccionado: any; // Manga seleccionado para editar

  constructor(
    private servicioMangas: MangasApiService,
    private servicioAutores: AutoresApiService,
    private servicioEstados: EstadosApiService,
    private servicioGeneros: GenerosApiService
  ) {}

  ngOnInit(): void {
    this.loadData();
    this.loadEstados();
    this.loadGeneros();
  }

  // Cargar mangas y autores
  loadData() {
    forkJoin({
      mangas: this.servicioMangas.getMangas(this.params),
      autores: this.servicioAutores.getAutores()
    }).subscribe({
      next: ({mangas, autores}) => {
        this.mangas = mangas;
        this.autores = autores;
        console.log('Mangas recibidos:', mangas);
        console.log('Autores recibidos:', autores);
        this.updateMangasAutores();
      }
    })
  }

  loadEstados() {
    this.servicioEstados.getEstados().subscribe({
      next: (res) => {
        this.estados = res;
        console.log('Estados obtenidos', this.estados);
      },
      error: (error) => {
        console.log('No se pudo obtener los estados. Error', error);
      }
    })
  }

  loadGeneros() {
    this.servicioGeneros.getGeneros().subscribe({
      next: (res) => {
        this.generos = res;
        console.log('Generos obtenidos:', this.generos);
      },
      error: (error) => {
        console.log('No se pudo obtener los generos. Error:', error);
      }
    })
  }

  updateMangasAutores() {
    for (let man of this.mangas) {
      man.autorNombre = this.autores[man.autor-1].nombre;
    }
  }

  changePage(newPage: number) {
    this.params.page = newPage;
    this.loadData();
  }

  // Recibe datos del componente search-form (hijo)
  onSearchSubmit(datosForm: any) {
    const autorSeleccionado = this.autores.find(
      (autor) => autor.nombre.toLowerCase() === datosForm.searchAutor.toLowerCase()
    );

    console.log('Autor seleccionado:', autorSeleccionado)

    this.params = {
      page: 1,
      titulo: datosForm.searchTitulo,
      autor: autorSeleccionado? autorSeleccionado.id: '',
      estado: datosForm.searchEstado,
      genero: datosForm.searchGenero
    };

    this.loadData();
  }

  onMangaSelected(mangaYAccion: any) {
    // mangaYAccion ejemplo [manga, true] | El primer elemento es el objeto manga,
    // despues un boolean que indica si borrar o editar (true borrar, false editar)

    console.log('True');
    this.mangaSeleccionado = mangaYAccion[0];
    if (mangaYAccion[1]) {
      this.mostrarModalDel = true;
    } else {
      this.mostrarModalEdit = true;
    }
  }

  onCerrarModalEdit() {
    this.mostrarModalEdit = false;
  }

  editarManga(manga: any) {
    console.log('Manga actualizado', manga)
    this.servicioMangas.updateManga(manga).subscribe({
      next: (res) => {
        console.log('Manga editado exitosamente!');
      },
      error: (error) => {
        console.log('No pudo editarse el manga de id', manga.id, '. Error:', error);
      }
    });
    this.loadData();
  }

  borrarManga(id: number) {
    this.servicioMangas.deleteManga(id).subscribe({
      next: (res) => {
        console.log('Manga eliminado exitosamente');
      },
      error: (error) => {
        console.log('No pudo eliminarse el manga de id', id, 'Error:', error);
      }
    });
    this.loadData();
  }

  onCerrarModalDel() {
    this.mostrarModalDel = false;
  }
}
