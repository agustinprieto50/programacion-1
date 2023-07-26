import { AnimateTimings } from '@angular/animations';
import { Token } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';
import { GetUsersService } from 'src/app/services/get-users.service';

@Component({
  selector: 'app-users-table',
  templateUrl: './users-table.component.html',
  styleUrls: ['./users-table.component.css']
})
export class UsersTableComponent implements OnInit {
  @Input() parameters!:string;
  users:any;
  constructor(private getUsers: GetUsersService) { }

  ngOnInit(): void {
    this.getUsers.getUsersAll('').subscribe((data:any)=> {
      this.users = data['users']
  })
    
  }

}
