import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class DeletePoemService {
  url:any
  constructor(
    private httpClient: HttpClient,
  ) { }

  deletePoem(poem_id:any){
    const token = localStorage.getItem('token') 
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    const options = { headers: headers}
    this.url = `/api/poem/${poem_id}`
    return this.httpClient.delete(this.url,options); 
  }
  
}
