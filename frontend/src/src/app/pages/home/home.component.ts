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

  updateParams():void {

    this.params=''

    if (this.alias !== '') {
      this.params += '&alias=' + this.alias;

    }
    if (this.titulo !== '') {
      this.params += '&title=' + this.titulo;

    }
    if (this.fechaMayor !== '') {
      this.params += '&date[gt]=' + this.fechaMayor;

    }
    if (this.fechaMenor !== '') {
      this.params += '&date[lt]=' + this.fechaMenor;

    }
    if (this.calMayor !== '') {
      this.params += '&calification[gt]=' + this.calMayor;

    }
    if (this.calMenor!== '') {
      this.params += '&calification[lt]=' + this.calMenor;

    }

    if (this.orden !== 'none') {
      this.params += '&order_by=' + this.orden;
    }
    console.log(this.fechaMayor)
  }

  clearForms() {
    this.alias = '';
    this.titulo = '';
    this.fechaMayor = '';
    this.fechaMenor = '';
    this.calMayor = '';
    this.calMenor = '';
    this.orden = 'none';
    this.updateParams(); // Optionally, call this if you want to update params after clearing the forms.
  }

  
}
