import { Component, Input, OnInit } from '@angular/core';
import { GetPoemsServiceService } from 'src/app/services/get-poems-service.service';
// import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-poem-card',
  templateUrl: './poem-card.component.html',
  styleUrls: ['./poem-card.component.css']
})
export class PoemCardComponent implements OnInit {
  @Input() parameters!:string;
  poems: any;
  constructor(private getPoems: GetPoemsServiceService) { }

  ngOnInit(): void {
    this.getPoems.getPoemsAll(this.parameters)
      .subscribe((data: any) => {
       this.poems = data['poems']
    })
  }
  
}
