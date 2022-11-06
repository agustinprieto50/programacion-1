import { Component, OnInit } from '@angular/core';
import { GetPoemsServiceService } from 'src/app/services/get-poems-service.service';


@Component({
  selector: 'app-order-by',
  templateUrl: './order-by.component.html',
  styleUrls: ['./order-by.component.css']
})
export class OrderByComponent implements OnInit {

  selectedOption = ''

  constructor(private getPoems: GetPoemsServiceService) { }

  ngOnInit(): void {
  }
  onSelected(value:string): void {
    this.selectedOption = value
    switch (this.selectedOption){
      case "title":
        this.getPoems.getPoemsAll("order_by=title")
      .subscribe((data: any) => {
       console.log(data)
    })

    }
  }


}
