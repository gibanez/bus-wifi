import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  resource: string;
  private api: string;

  constructor(private http: HttpClient)
  {
    this.api = environment.apiUrl;
  }
  post(path: string, data: object) {
    return this.http.post(this.api + path, data);
  }
  get(path: string) {
    console.info(this.api + path);
    return this.http.get(this.api + path);
  }
}
