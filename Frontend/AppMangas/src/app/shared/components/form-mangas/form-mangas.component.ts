import { Component, Input, Output, EventEmitter } from '@angular/core';

import { EstadosApiService } from '../../../core/services/estados/estados-api.service';
import { GenerosApiService } from '../../../core/services/generos/generos-api.service';

@Component({
  selector: 'app-form-mangas',
  templateUrl: './form-mangas.component.html',
  styleUrl: './form-mangas.component.scss'
})
export class FormMangasComponent {
  @Input() placeholders: any;
  @Output() sendSubmit = new EventEmitter <any>();

  estados: any[] = [];
  generos: any[] = [];

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
    console.log(this.placeholders);
    this.sendSubmit.emit(this.placeholders);
  }
}
