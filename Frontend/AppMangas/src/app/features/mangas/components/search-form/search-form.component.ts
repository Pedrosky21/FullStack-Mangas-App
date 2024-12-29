import { Component, Output, EventEmitter } from '@angular/core';

import { EstadosApiService } from '../../../../core/services/estados/estados-api.service';
import { GenerosApiService } from '../../../../core/services/generos/generos-api.service';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrl: './search-form.component.scss',
})
export class SearchFormComponent {
  @Output() searchSubmit = new EventEmitter <any>();

  estados: any[] = [];
  generos: any[] = [];

  formData = {
    searchTitulo: "",
    searchAutor: "",
    searchEstado: "",
    searchGenero: ""
  }

  constructor(
    private serviceEstados: EstadosApiService,
    private serviceGeneros: GenerosApiService
  ) {}

  ngOnInit(): void {
    this.loadEstados();
    this.loadGeneros();
  }

  loadEstados() {
    this.serviceEstados.getEstados().subscribe({
      next: (res) => {
        this.estados = res;
        console.log('Estados obtenidos:', this.estados);
      },
      error: (error) => {
        console.log('Error:', error);
      }
    });
  }

  loadGeneros() {
    this.serviceGeneros.getGeneros().subscribe({
      next: (res) => {
        this.generos = res;
        console.log('Generos obtenidos:', res);
      },
      error: (error) => {
        console.log('Error:', error);
      }
    })
  }

  onSubmit() {
    console.log(this.formData);
    this.searchSubmit.emit(this.formData);
  }
}
