import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  
  params: string = ""
  pages: number = 1
  baseParams: string = ""
  alias: string = '';
  titulo: string = '';
  fechaMayor: string = '';
  fechaMenor: string = '';
  calMayor: string = '';
  calMenor: string = '';
  orden: string = '';
  

  constructor(private route: ActivatedRoute ) { }

  ngOnInit(): void {
    this.params = "per_page=20"
  }
  get isToken(){
    return localStorage.getItem("token") || undefined
  }

  get isAdmin(){
    if ((localStorage.getItem("admin")) == 'true'){
      return true
    }
    else{
      return false
    }
  }

  getItemsPerPage (value: number) {
    this.params =  `per_page=${value}` 
    this.baseParams = this.params
  }

  paginationPages (value:number) {
    this.pages = value
  }

  getPage (value: number) {
    this.params = this.baseParams + `&page=${value}` 
  }

  updateParams(filters: any): void {
    this.params = ''
    this.params = this.baseParams + this.convertObjectToParams(filters);
  }

  private convertObjectToParams(obj: any): string {
    return Object.keys(obj)
      .map(key => `&${key}=${encodeURIComponent(obj[key])}`)
      .join('');
  }
}

  

