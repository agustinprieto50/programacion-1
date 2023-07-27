import { AnimateTimings } from '@angular/animations';
import { Component, OnInit, OnChanges, SimpleChanges, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-items-per-page',
  templateUrl: './items-per-page.component.html',
  styleUrls: ['./items-per-page.component.css']
})
export class ItemsPerPageComponent{
  @Output() itemsPerPageEvent: EventEmitter<number> = new EventEmitter<number>();

  selectItemsPerPage(target: EventTarget | null){
    if (target instanceof HTMLSelectElement) {
      this.itemsPerPageEvent.emit(Number(target.value))
    }
  }
}
