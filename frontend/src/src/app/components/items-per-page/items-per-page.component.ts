import { AnimateTimings } from '@angular/animations';
import { Component, OnInit, OnChanges, SimpleChanges, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-items-per-page',
  templateUrl: './items-per-page.component.html',
  styleUrls: ['./items-per-page.component.css']
})
export class ItemsPerPageComponent{
  @Output() valueEvent = new EventEmitter<number>()
  value: number = 0

  constructor() { }
  onChange(){
    this.valueEvent.emit(this.value)
  }
}
