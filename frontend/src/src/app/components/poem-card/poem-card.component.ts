import { Component, Input, OnChanges, OnInit, Output, SimpleChanges, EventEmitter} from '@angular/core';
import { GetPoemsServiceService } from 'src/app/services/get-poems-service.service';
import { GetUserService } from 'src/app/services/get-user.service';
import { PoemUtilsService } from 'src/app/services/poem-utils.service';
// import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-poem-card',
  templateUrl: './poem-card.component.html',
  styleUrls: ['./poem-card.component.css']
})
export class PoemCardComponent implements OnInit, OnChanges {
  @Input() parameters!:string;
  @Output() updatePagesEvent = new EventEmitter<number>();
  @Output() clickOnUserEvent = new EventEmitter<string>();
  itemsPerPage:any;
  poems: any;
  token: any
  user_id: any;
  user_review_count: any;
  showLessReviewed:any;

  constructor(private getPoems: GetPoemsServiceService, private getUser: GetUserService,private PoemUtilsService: PoemUtilsService) { }

  getPoemsScript () {
    this.token = localStorage.getItem('token') || undefined
    this.user_id = localStorage.getItem('user_id') || undefined
    if (this.token) {
      this.PoemUtilsService.isUserEnabledToPostPoem().subscribe(
        (value) =>{
          this.showLessReviewed = value
          
    
        }
      )
      if (!this.showLessReviewed){
        this.parameters = "order_by=calification"
        this.getPoems.getPoemsAll(this.parameters)
        .subscribe((data: any) => {
        this.poems = data['poems']
        this.updatePagesEvent.emit(Number(data['pages']))
       
        
    })
      }
      else{
        this.getPoems.getPoemsAll(this.parameters)
        .subscribe((data: any) => {
        this.poems = data['poems']
        this.updatePagesEvent.emit(Number(data['pages']))

    })
      }
    }
    else {
      this.getPoems.getPoemsAll(this.parameters)
        .subscribe((data: any) => {
        this.poems = data['poems']
        this.updatePagesEvent.emit(Number(data['pages']))

    })
    }
    console.log(this.poems)
  }

  ngOnInit(): void {
    this.getPoemsScript()
    
  }
  ngOnChanges(changes: SimpleChanges) {
      if(changes['parameters'] && !changes['parameters'].firstChange) {
        this.getPoemsScript()

      }
  }

  generateStarsArray(rating: number): number[] {
    return Array.from({ length: rating }, (_, index) => index + 1);
  }

  outputUserName(value: string) {
    this.clickOnUserEvent.emit(value)
  }

}
