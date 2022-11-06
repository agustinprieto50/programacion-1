import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class GetPoemsServiceService {
  url:any
  constructor(private http: HttpClient ) { }
  getPoemsAll(parameters:string) {
    this.url = `/api/poems/${parameters}`
    return this.http.get(this.url)
  }
}
