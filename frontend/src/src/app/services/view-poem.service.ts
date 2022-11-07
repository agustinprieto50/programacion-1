import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ViewPoemService {
  url!:any
  constructor(private http: HttpClient) {}
  viewPoem(poem_id:any){
    this.url = `/api/poem/${poem_id}`
    return this.http.get(this.url)
  }
}
