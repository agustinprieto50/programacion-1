import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http'
import { Observable} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class DeleteUserService {
  url:any
  constructor(
    private httpClient: HttpClient,
  ) { }

  deleteUser(user_id:any){
    const token = localStorage.getItem('token') 
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    const options = { headers: headers}
    this.url = `/api/user/${user_id}`
    return this.httpClient.delete(this.url,options); 
  }
}
