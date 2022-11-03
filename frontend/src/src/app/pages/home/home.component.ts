import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  params!:any;

  constructor(private route: ActivatedRoute ) { }

  ngOnInit(): void {
    this.params = this.route.snapshot.paramMap.get(encodeURIComponent('parameters'));
    console.log(encodeURIComponent(this.params))
  }

}
