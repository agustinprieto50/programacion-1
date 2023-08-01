import { Component, OnInit, Input } from '@angular/core';
import { DeleteUserService } from 'src/app/services/delete-user.service'; 

@Component({
  selector: 'app-delete-user-form',
  templateUrl: './delete-user-form.component.html',
  styleUrls: ['./delete-user-form.component.css']
})
export class DeleteUserFormComponent implements OnInit {
  
  @Input() userId:any
  @Input() alias:any
  constructor(private deleteUserService: DeleteUserService) { }

  ngOnInit(): void {
  }
  openConfirmationModal(userId:any): void {
    const confirmationModal = document.getElementById('confirmationModal-' + userId);
    confirmationModal?.classList.add('show');
    confirmationModal?.setAttribute('aria-modal', 'true');
    confirmationModal?.setAttribute('style', 'display: block');
  }

  closeConfirmationModal(userId:any): void {
    const confirmationModal = document.getElementById('confirmationModal-' + userId);
    confirmationModal?.classList.remove('show');
    confirmationModal?.setAttribute('aria-modal', 'false');
    confirmationModal?.setAttribute('style', 'display: none');
  }


  deleteUser(userId: any): void {
    this.deleteUserService.deleteUser(userId).subscribe(
      
      () => {
        console.log(`Tried deleting user ${userId}`);
        console.log(`User with ID ${userId} deleted successfully.`);
        alert(`Se elimino el usuario con id ${userId}`)
        window.location.reload()
      },
      (error) => {
        console.log(`Tried deleting user ${userId}`);
        console.error(`Error deleting user with ID ${userId}: ${error}`);
      }
    );
  }

  deleteUserConfirmed(userId:any): void {
    this.deleteUser(userId);
    this.closeConfirmationModal(userId);
  }

}
