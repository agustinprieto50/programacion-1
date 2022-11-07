import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ViewPoemService } from 'src/app/services/view-poem.service';
@Component({
  selector: 'app-view-poem',
  templateUrl: './view-poem.component.html',
  styleUrls: ['./view-poem.component.css']
})
export class ViewPoemComponent implements OnInit {

  poem_id!:any;
  content!:any;
  title!:any;
  user_id!:any;
  alias!:any;
  review_array!:any;

  
  constructor(private route: ActivatedRoute,private viewPoem: ViewPoemService) { }

  ngOnInit(): void {
    this.poem_id = `poem_id=${this.route.snapshot.paramMap.get('id')}`
    this.viewPoem.viewPoem(this.route.snapshot.paramMap.get('id'))
    .subscribe((data: any) => {
      this.content = data.content
      this.title = data.title
      this.alias = data.alias
      this.user_id = data.user
      this.review_array = data.reviews
      console.log(this.review_array)
    })
  }


}

