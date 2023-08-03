import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; 


@Component({
  selector: 'app-user-crud',
  templateUrl: './user-crud.component.html',
  styleUrls: ['./user-crud.component.css']
})
export class UserCrudComponent implements OnInit {
  pages: number = 1;
  page: number = 1;
  alias: string = '';
  poemas: string = '';
  reviews: string = '';
  orden: string = 'none';

  params: any;
  baseParams: any;
  constructor() { }

  ngOnInit(): void {
    this.params = "per_page=20"
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
}

