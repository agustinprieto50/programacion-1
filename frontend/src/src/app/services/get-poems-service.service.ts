import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class GetPoemsServiceService {
  url:any
  constructor(private http: HttpClient ) { }
  getPoemsAll(parameters:any) {
    this.url = "/api/poems/per_page=20"
    return this.http.get(this.url)
  }
}
