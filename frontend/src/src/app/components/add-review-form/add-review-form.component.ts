import { Component, OnInit } from '@angular/core';
import { CreateReviewService } from 'src/app/services/create-review.service';

@Component({
  selector: 'app-add-review-form',
  templateUrl: './add-review-form.component.html',
  styleUrls: ['./add-review-form.component.css']
})
export class AddReviewFormComponent implements OnInit {
  calification:any;
  comment:any;

  constructor(private postReview:CreateReviewService) { }

  ngOnInit(): void {
  }
  onSubmit(){
    const body = {calification:this.calification, comment: this.comment}
    this.postReview.postRequest(body).subscribe(response => {
      console.log(response)
    })
  }

}
