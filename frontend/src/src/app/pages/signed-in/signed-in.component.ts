import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signed-in',
  templateUrl: './signed-in.component.html',
  styleUrls: ['./signed-in.component.css']
})
export class SignedInComponent {
  selectedItemsPerPage: number | undefined;

  onValueChanged(value: number){
    this.selectedItemsPerPage = value
    console.log(this.selectedItemsPerPage)
  }

}
