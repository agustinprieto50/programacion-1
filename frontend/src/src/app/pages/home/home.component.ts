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

  constructor(private route: ActivatedRoute ) { }

  ngOnInit(): void {
    this.params = "per_page=20"
  }
  get isToken(){
    return localStorage.getItem("token") || undefined
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
