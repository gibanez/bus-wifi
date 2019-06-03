import { Injectable } from '@angular/core';
import {HttpService} from 'src/app/shared/service/http.service';

@Injectable({
  providedIn: 'root'
})
export class SourceService extends HttpService {
  resource = 'media';
  getSync() {
    return this.get('media/sync');
  }

  getScan() {
    return this.get('media/scan');
  }

  refresh() {
    return this.post('media/refresh', {overWrite: true});
  }
}
