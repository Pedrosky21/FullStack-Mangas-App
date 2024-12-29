import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MangasApiService {
  private apiUrl = 'http://localhost:4000/api/mangas';

  constructor(private http: HttpClient) { }

  addManga(manga: any): Observable<any> {
    return this.http.post(this.apiUrl, manga);
  }

  getMangas(params: any): Observable<any> {
    return this.http.get(this.apiUrl, { params });
  }

  updateManga(manga: any): Observable<any> {
    return this.http.put(this.apiUrl+`/${manga.id}`, manga);
  }

  deleteManga(id: number): Observable<any> {
    return this.http.delete(this.apiUrl +`/${id}`);
  }
}
