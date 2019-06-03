import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  resource: string;
  private api: string;

  constructor(private http: HttpClient) {
    this.api = environment.apiUrl;
  }

  getResource() {
    return this.resource;
  }

  getUrl() {
    console.info(this.api, this.getResource())
    return this.api + this.getResource();
  }
  findAll(page = 1, filter: object = {}) {
    filter['page'] = page;
    console.info(this.getUrl())
    return this.get('?' + this.serialize(filter));
  }

  serialize(obj, prefix = null) {
    let str = [],
      p;
    for (p in obj) {
      if (obj.hasOwnProperty(p)) {
        var k = prefix ? prefix + "[" + p + "]" : p,
          v = obj[p];
        str.push((v !== null && typeof v === "object") ?
          this.serialize(v, k) :
          encodeURIComponent(k) + "=" + encodeURIComponent(v));
      }
    }
    return str.join("&");
  }

  post(path: string, data: object) {
    return this.http.post(this.api + path, data);
  }
  get(path: string) {
    console.info(this.api + path);
    return this.http.get(this.getUrl() + path);
  }
}
