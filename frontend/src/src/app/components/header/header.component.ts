import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {


  constructor(
    private authService:AuthService
  ) { }

  ngOnInit(): void {
  }

  get isToken(){
    return localStorage.getItem("token") || undefined
  }
  

  cerrarSesion(){
    this.authService.logout()
  }

}
