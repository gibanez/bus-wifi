import {HttpClient, HttpParams} from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiMovieService {
  constructor(private http: HttpClient) { }
  getMovies(query) {
    let params = new HttpParams();

    // Begin assigning parameters
    params = params.append('api_key', 'd26a0a7c1b2b3cc7a59159ac98174f4f');
    params = params.append('language', 'es-AR');
    params = params.append('include_adult', 'true');
    params = params.append('query', query);

    return this.http.get('https://api.themoviedb.org/3/search/movie', {params});
  }
}
