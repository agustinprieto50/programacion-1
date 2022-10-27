import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-poem-card',
  templateUrl: './poem-card.component.html',
  styleUrls: ['./poem-card.component.css']
})
export class PoemCardComponent implements OnInit {

  arrayPoemas = [
    {
      id: 1,
      title:'Poema 1',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque tempus vehicula rutrum. Cras eget justo sed odio fermentum pretium. In eget massa vitae ipsum dapibus dictum. Aenean tempor imperdiet felis, in vulputate lorem finibus sit amet. Fusce sit amet ante neque. Pellentesque a venenatis justo. Integer non purus quis lorem semper varius aliquet a erat. Donec pretium orci ac mi tristique varius.',
      post_date: '2022-10-22',
      user: 1, 
      reviews: []
    },
    {
      id: 1,
      title:'Poema 1',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque tempus vehicula rutrum. Cras eget justo sed odio fermentum pretium. In eget massa vitae ipsum dapibus dictum. Aenean tempor imperdiet felis, in vulputate lorem finibus sit amet. Fusce sit amet ante neque. Pellentesque a venenatis justo. Integer non purus quis lorem semper varius aliquet a erat. Donec pretium orci ac mi tristique varius.',
      post_date: '2022-10-22',
      user: 1, 
      reviews: []
    },
    {
      id: 1,
      title:'Poema 1',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque tempus vehicula rutrum. Cras eget justo sed odio fermentum pretium. In eget massa vitae ipsum dapibus dictum. Aenean tempor imperdiet felis, in vulputate lorem finibus sit amet. Fusce sit amet ante neque. Pellentesque a venenatis justo. Integer non purus quis lorem semper varius aliquet a erat. Donec pretium orci ac mi tristique varius.',
      post_date: '2022-10-22',
      user: 1, 
      reviews: []
    },
    {
      id: 1,
      title:'Poema 1',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque tempus vehicula rutrum. Cras eget justo sed odio fermentum pretium. In eget massa vitae ipsum dapibus dictum. Aenean tempor imperdiet felis, in vulputate lorem finibus sit amet. Fusce sit amet ante neque. Pellentesque a venenatis justo. Integer non purus quis lorem semper varius aliquet a erat. Donec pretium orci ac mi tristique varius.',
      post_date: '2022-10-22',
      user: 1, 
      reviews: []
    }   
    
  ]

  constructor() { }

  ngOnInit(): void {
  }


}
