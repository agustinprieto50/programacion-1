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
  alias: string = '';
  poemas: string = '';
  reviews: string = '';
  orden: string = 'none';
  params: any
  constructor() { }

  ngOnInit(): void {
    this.params=''
  }
  
  updateParams():void {

    this.params=''
    if (this.alias !== '') {
      this.params += '&alias=' + this.alias;

    }

    if (this.poemas !== '') {
      this.params += '&poem_count=' + this.poemas;
    }

    if (this.reviews !== '') {
      this.params += '&review_count=' + this.reviews;
    }

    if (this.orden !== 'none') {
      this.params += '&order_by=' + this.orden;
    }

  }

  clearForms() {
    this.alias = '';
    this.poemas = '';
    this.reviews = '';
    this.orden = 'none';
    this.updateParams(); // Optionally, call this if you want to update params after clearing the forms.
  }

}

