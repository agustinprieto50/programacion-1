import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class GetUserService {
  url!:any
  constructor(private http: HttpClient) { }
  getUser(user_id:any){
    this.url = `/api/user/${user_id}`
    return this.http.get(this.url)
  }
}
