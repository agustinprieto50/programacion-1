import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signed-in',
  templateUrl: './signed-in.component.html',
  styleUrls: ['./signed-in.component.css']
})
export class SignedInComponent {

  constructor() { }


  onValueChange(value: any){
    console.log(value)
  }

}
