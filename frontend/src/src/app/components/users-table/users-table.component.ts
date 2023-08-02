import { AnimateTimings } from '@angular/animations';
import { Token } from '@angular/compiler';
import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges} from '@angular/core';
import { GetUsersService } from 'src/app/services/get-users.service';



@Component({
  selector: 'app-users-table',
  templateUrl: './users-table.component.html',
  styleUrls: ['./users-table.component.css']
})
export class UsersTableComponent implements OnInit {
  @Input() parameters!:string;
  @Output() pagesEvent = new EventEmitter<number>()
  users:any;
  constructor(private getUsers: GetUsersService) { }

  ngOnInit(): void {
    this.getUsers.getUsersAll('?'+this.parameters).subscribe((data:any)=> {
      this.users = data['users']
      this.pagesEvent.emit(Number(data['pages']))
  }) 
  }

  ngOnChanges() {
    this.getUsers.getUsersAll('?'+this.parameters).subscribe((data:any)=> {
      this.users = data['users']
      console.log(this.users)
  }) 
  }

  
}
