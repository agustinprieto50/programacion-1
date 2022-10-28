import { Component, OnInit } from '@angular/core';
import { GetPoemsServiceService } from 'src/app/services/get-poems-service.service';

@Component({
  selector: 'app-poem-card',
  templateUrl: './poem-card.component.html',
  styleUrls: ['./poem-card.component.css']
})
export class PoemCardComponent implements OnInit {
  poems: any;
  constructor(private getPoems: GetPoemsServiceService) { }

  ngOnInit(): void {
    this.getPoems.getPoemsAll()
      .subscribe((data: any) => {
       this.poems = data['poems']
    })
  }
  
}
