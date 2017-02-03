import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map'

@Injectable()
export class TwitsService {

  constructor(private http: Http) { }

  getTwits(tag) {
    return this.http.get('/api'+tag)
      .map(res => res.json());
  }
}
