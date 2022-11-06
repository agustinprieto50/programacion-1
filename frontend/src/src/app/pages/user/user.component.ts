import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GetUserService } from 'src/app/services/get-user.service'; 

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  user_id!:any
  user!:any

  constructor(private route: ActivatedRoute, private getUser: GetUserService) { }

  ngOnInit(): void {
    this.user_id = `user_id=${this.route.snapshot.paramMap.get('id')}`
    this.getUser.getUser(this.route.snapshot.paramMap.get('id'))
    .subscribe((data: any) => {
      this.user = data.alias
    console.log(this.user)
  })

  }
}