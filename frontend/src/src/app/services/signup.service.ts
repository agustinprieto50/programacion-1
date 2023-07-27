import { Injectable } from '@angular/core'
import { HttpClient,HttpHeaders } from '@angular/common/http'
import { Observable} from 'rxjs'


@Injectable({
  providedIn: 'root'
})
export class SignupService {
  url:any
  constructor(
    private httpClient: HttpClient,
  ) { }

  signUp(dataSignUp:any): Observable<any> {
    const token = localStorage.getItem('token') 
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    const options = { headers: headers}
    this.url = `/api/users`
    console.log(dataSignUp)
    return this.httpClient.post(this.url, dataSignUp, options); 
   }
}

