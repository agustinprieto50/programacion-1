import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PoemUtilsService {
  constructor(private http: HttpClient) { }

  isUserEnabledToPostPoem(){
    const token = localStorage.getItem('token')
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`)
    const options = {headers: headers}
    this.http.get(`/api/poemUtils`, options).subscribe((value)=>{console.log(value)})
    return this.http.get(`/api/poemUtils`, options)
  }
}
