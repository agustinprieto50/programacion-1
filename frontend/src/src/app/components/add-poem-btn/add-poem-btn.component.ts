import { Component, OnInit } from '@angular/core';
import { PoemUtilsService } from 'src/app/services/poem-utils.service';

@Component({
  selector: 'app-add-poem-btn',
  templateUrl: './add-poem-btn.component.html',
  styleUrls: ['./add-poem-btn.component.css']
})
export class AddPoemBtnComponent implements OnInit {
  isEnabled: any;
  constructor(private PoemUtilsService: PoemUtilsService) { }

  ngOnInit() {
    this.PoemUtilsService.isUserEnabledToPostPoem().subscribe(
      (value) =>{
        this.isEnabled = value
        

      }
    )
    console.log(this.isEnabled)
  }

}
