import { AnimateTimings } from '@angular/animations';
import { Component, OnInit, OnChanges, SimpleChanges, Output } from '@angular/core';

@Component({
  selector: 'app-items-per-page',
  templateUrl: './items-per-page.component.html',
  styleUrls: ['./items-per-page.component.css']
})
export class ItemsPerPageComponent implements OnInit {
  @Output() 
  value: any;
  constructor() { }

  ngOnInit(): void {
    console.log(this.value)
  }
  ngOnChanges(changes: SimpleChanges){
    console.log(this.value)
  }


}
