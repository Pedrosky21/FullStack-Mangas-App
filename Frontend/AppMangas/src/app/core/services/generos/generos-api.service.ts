import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GenerosApiService {
  private apiUrl = 'http://localhost:4000/api/generos';
  
  constructor(private http: HttpClient) { }

  getGeneros(): Observable <any> {
    return this.http.get(this.apiUrl);
  }

}
