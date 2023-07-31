import { ChangeDetectorRef, SimpleChanges } from '@angular/core';
import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnChanges{

  @Input() pages: number = 1;
  @Output() changePageEvent = new EventEmitter <number>();
  pagesArray:any[] = [1]
  selectedPage: number = 1;

  constructor(private changeDetectorRef: ChangeDetectorRef) { }

  ngOnChanges(changes: SimpleChanges) {
    if(changes['pages'] && !changes['pages'].firstChange) {
      this.pagesArray = []
      for (let i=0; i < this.pages; i++) {
        this.pagesArray.push(i+1)
      }
    }
  }

  updateSelectedPage (value: number) {
    this.changePageEvent.emit(value)
    this.selectedPage = value
    this.changeDetectorRef.detectChanges();
  }

  previousPage () {
    if (this.selectedPage !== 1) {
      this.selectedPage -= 1
      this.changePageEvent.emit(this.selectedPage)
    }
  }

  nextPage () {
    if (this.selectedPage < this.pages) {
      this.selectedPage += 1
      this.changePageEvent.emit(this.selectedPage)
    }
  }

}
