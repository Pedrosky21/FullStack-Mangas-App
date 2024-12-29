import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EstadosApiService {
  private apiUrl = 'http://localhost:4000/api/estados';

  constructor(private http: HttpClient) {}

  getEstados(): Observable <any> {
    return this.http.get(this.apiUrl);
  }
}
