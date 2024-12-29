import { Component } from '@angular/core';

import { MangasApiService } from '../../../../core/services/mangas/mangas-api.service';
import { AutoresApiService } from '../../../../core/services/autores/autores-api.service';
import { EstadosApiService } from '../../../../core/services/estados/estados-api.service';
import { GenerosApiService } from '../../../../core/services/generos/generos-api.service';

import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-manga-page',
  templateUrl: './add-manga-page.component.html',
  styleUrl: './add-manga-page.component.scss',
})
export class AddMangaPageComponent {
  autores: any;
  estados: any;
  generos: any;

  // Form reactivo
  form!: FormGroup;
  tituloCtrl = new FormControl('', [
    Validators.required,
    Validators.minLength(1),
    Validators.maxLength(50)
  ]);
  autorCtrl = new FormControl('', [
    Validators.required,
    Validators.minLength(1),
    Validators.maxLength(50)
  ]);
  estadoCtrl = new FormControl('', [
    Validators.required,
    Validators.min(1)
  ]);
  generoCtrl = new FormControl('', [
    Validators.required
  ]);
  fechaLanzamientoCtrl = new FormControl('', [
    Validators.required
  ]);
  tomosCtrl = new FormControl('', [
    Validators.required
  ]);

  constructor(
    private servicioMangas: MangasApiService,
    private servicioAutores: AutoresApiService,
    private servicioEstados: EstadosApiService,
    private servicioGeneros: GenerosApiService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.loadAutores();
    this.loadEstados();
    this.loadGeneros();

    this.form = this.formBuilder.group({
      titulo: this.tituloCtrl,
      autor: this.autorCtrl,
      estado: this.estadoCtrl,
      genero: this.generoCtrl,
      fechaLanzamiento: this.fechaLanzamientoCtrl,
      tomos: this.tomosCtrl,
    });
  }

  loadAutores() {
    this.servicioAutores.getAutores().subscribe({
      next: (res) => {
        this.autores = res;
        console.log('Autores obtenidos:', this.autores);
      },
      error: (error) => {
        console.log('No se pudo obtener los autores. Error:', error);
      },
    });
  }

  loadEstados() {
    this.servicioEstados.getEstados().subscribe({
      next: (res) => {
        this.estados = res;
        console.log('Estados obtenidos:', this.estados);
      },
      error: (error) => {
        console.log('No se pudo obtener los estados. Error:', error);
      },
    });
  }

  loadGeneros() {
    this.servicioGeneros.getGeneros().subscribe({
      next: (res) => {
        this.generos = res;
        console.log('Generos obtenidos:', this.generos);
      },
      error: (error) => {
        console.log('No se pudo obtener los generos. Error:', error);
      },
    });
  }

  onSubmit() {
    const mangaEnviado = this.form.value;
    console.log('Se envio el manga', mangaEnviado);
    this.servicioMangas.addManga(mangaEnviado).subscribe({
      next: (res) => {
        console.log('Se agregó exitosamente el manga:', mangaEnviado);
      },
      error: (error) => {
        console.log('No pudo agregarse el manga. Error', error);
      }
    })
  }
}
