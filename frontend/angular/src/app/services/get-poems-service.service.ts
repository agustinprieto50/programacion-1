import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class GetPoemsServiceService {
  url = "/"
  constructor(private http: HttpClient) { }
  getPoemsAll() {
    return this.http.get(this.url)
  }
}
