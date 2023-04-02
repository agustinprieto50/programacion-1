import { AnimateTimings } from '@angular/animations';
import { Token } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';
import { GetPoemsServiceService } from 'src/app/services/get-poems-service.service';
import { GetUserService } from 'src/app/services/get-user.service';
// import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-poem-card',
  templateUrl: './poem-card.component.html',
  styleUrls: ['./poem-card.component.css']
})
export class PoemCardComponent implements OnInit {
  @Input() parameters!:string;
  itemsPerPage:any;
  poems: any;
  token: any
  user_id: any;
  user_review_count: any;

  constructor(private getPoems: GetPoemsServiceService, private getUser: GetUserService) { }

  ngOnInit(): void {
    this.token = localStorage.getItem('token') || undefined
    this.user_id = localStorage.getItem('user_id') || undefined
    if (this.token) {
      this.getUser.getUser(this.user_id).subscribe((data: any) => {
        this.user_review_count = data['review_count']
      })
      if (this.user_review_count < 5){
        this.getPoems.getPoemsAll('order_by=calification[asc]')
        .subscribe((data: any) => {
        this.poems = data['poems']
    })
      }
      else{
        this.getPoems.getPoemsAll(this.parameters)
        .subscribe((data: any) => {
        this.poems = data['poems']
    })
      }
    }
    else {
      this.getPoems.getPoemsAll(this.parameters)
        .subscribe((data: any) => {
        this.poems = data['poems']
    })
    }
    
  }
  get isToken(){
    return localStorage.getItem("token") || undefined
  }

  
}
