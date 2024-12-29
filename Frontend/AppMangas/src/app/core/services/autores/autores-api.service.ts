import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AutoresApiService {
  private apiUrl = 'http://localhost:4000/api/autores';

  constructor(private http: HttpClient) { }

  getAutores(page: number = 1): Observable <any> {
    const params = {
      page: page
    };
    return this.http.get(this.apiUrl, {params});
  }
}
