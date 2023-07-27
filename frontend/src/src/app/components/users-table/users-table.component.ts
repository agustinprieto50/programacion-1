import { AnimateTimings } from '@angular/animations';
import { Token } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';
import { GetUsersService } from 'src/app/services/get-users.service';
import { DeleteUserService } from 'src/app/services/delete-user.service'; 


@Component({
  selector: 'app-users-table',
  templateUrl: './users-table.component.html',
  styleUrls: ['./users-table.component.css']
})
export class UsersTableComponent implements OnInit {
  @Input() parameters!:string;
  users:any;
  constructor(private getUsers: GetUsersService,private deleteUserService: DeleteUserService) { }

  ngOnInit(): void {
    this.getUsers.getUsersAll('').subscribe((data:any)=> {
      this.users = data['users']
      console.log(this.users)
  })
    
  }

  openConfirmationModal(): void {
    const confirmationModal = document.getElementById('confirmationModal');
    confirmationModal?.classList.add('show');
    confirmationModal?.setAttribute('aria-modal', 'true');
    confirmationModal?.setAttribute('style', 'display: block');
  }

  closeConfirmationModal(): void {
    const confirmationModal = document.getElementById('confirmationModal');
    confirmationModal?.classList.remove('show');
    confirmationModal?.setAttribute('aria-modal', 'false');
    confirmationModal?.setAttribute('style', 'display: none');
  }


  deleteUser(userId: any): void {
    this.deleteUserService.deleteUser(userId).subscribe(
      
      () => {
        console.log(`User with ID ${userId} deleted successfully.`);
      },
      (error) => {
        console.log(`Tried deleting user ${userId}`);
        console.error(`Error deleting user with ID ${userId}: ${error}`);
      }
    );
  }

  deleteUserConfirmed(userId:any): void {
    this.deleteUser(userId);
    this.closeConfirmationModal();
  }

}
