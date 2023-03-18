import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable, take } from 'rxjs'
import { environment } from 'src/environments/environment'
import {Router} from '@angular/router'

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  url:any
  constructor(
    private httpClient: HttpClient,
    private router:Router
  ) { }
  
  login(dataLogin:any): Observable<any> {
    //let dataLogin = {email:'lover2@gmail.com',password:"12345"};
    this.url = `/api/auth/login`
    return this.httpClient.post(this.url, dataLogin).pipe(take(1));  

  }
  logout(){
    localStorage.removeItem("token")
  }
  


}
