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
  params:any

  constructor() { }

  ngOnInit(): void {
  }
  updateTableParameters() {
    // Formulate the parameters based on the input values
    this.params = `alias=${this.alias}&poem_count=${this.poemas}&review_count=${this.reviews}`;

}
}
