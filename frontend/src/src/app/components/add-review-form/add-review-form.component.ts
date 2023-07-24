import { Component, Input, OnInit } from '@angular/core';
import { CreateReviewService } from 'src/app/services/create-review.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-add-review-form',
  templateUrl: './add-review-form.component.html',
  styleUrls: ['./add-review-form.component.css']
})
export class AddReviewFormComponent implements OnInit {
  comment:any;
  stars: number[] = [1, 2, 3, 4, 5]
  rating: number = 0
  @Input() poem_id:any;

  constructor(private postReview:CreateReviewService, private router: Router) { }

  ngOnInit(): void {
  }
  onSubmit(){

    const body = {calification:this.rating, comment: this.comment, poem_id: this.poem_id}
    this.postReview.postRequest(body).subscribe(response => {
      this.router.navigate(['view-poem', { id: this.poem_id }])
      window.location.reload()

    })
  }

  rate(rating: number){

    this.rating = rating

  }

}
