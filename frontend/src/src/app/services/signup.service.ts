import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
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
    const headers = { 'content-type': 'application/json'}  
    this.url = `/api/users`
    console.log(dataSignUp)
    return this.httpClient.post(this.url, dataSignUp,{'headers':headers}); 
   }
}

