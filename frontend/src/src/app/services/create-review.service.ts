import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'; 

@Injectable({
  providedIn: 'root'
})
export class CreateReviewService {
  url = `/api/reviews`

  constructor(private http:HttpClient) { }
  postRequest(data:any){
    const token = localStorage.getItem('token') || '{}'
    if (token){
      const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
      const options = { headers: headers}
      return this.http.post(this.url, data, options)
    }
    return this.http.post(this.url, data)
  }
}
