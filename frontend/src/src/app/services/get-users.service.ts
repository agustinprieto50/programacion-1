import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetUsersService {
  url!:any
  constructor(private http: HttpClient) { }
  getUsersAll(parameters:string){
    this.url = `/api/users${parameters}`
    return this.http.get(this.url)
  }
}
