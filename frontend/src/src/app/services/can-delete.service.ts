import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CanDeleteService {

  constructor() { }

  canDelete(user_id:any){
    if((user_id==localStorage.getItem("user_id")) || (localStorage.getItem("admin") == 'true')){
      return true
    }
    else{
      return false
    }
  }

}
