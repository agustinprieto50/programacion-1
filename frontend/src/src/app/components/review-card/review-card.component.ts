import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-review-card',
  templateUrl: './review-card.component.html',
  styleUrls: ['./review-card.component.css']
})
export class ReviewCardComponent implements OnInit {
  
  @Input() reviews!:any;
  stars: number[] = [1, 2, 3, 4, 5]


  constructor() { }

  ngOnInit(): void {
    console.log(this.reviews)

  }

}
