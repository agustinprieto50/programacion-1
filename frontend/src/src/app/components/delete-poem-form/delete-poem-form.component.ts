import { Component, OnInit ,Input} from '@angular/core';
import { DeletePoemService } from 'src/app/services/delete-poem.service';
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-delete-poem-form',
  templateUrl: './delete-poem-form.component.html',
  styleUrls: ['./delete-poem-form.component.css']
})
export class DeletePoemFormComponent implements OnInit {
  @Input() poemId:any
  @Input() title:any
  constructor(private deletePoem:DeletePoemService,private router: Router) { }
 
  ngOnInit(): void {
  }

  openConfirmationModal(): void {
    const confirmationModal = document.getElementById('confirmationModal-');
    confirmationModal?.classList.add('show');
    confirmationModal?.setAttribute('aria-modal', 'true');
    confirmationModal?.setAttribute('style', 'display: block');
  }

  closeConfirmationModal(): void {
    const confirmationModal = document.getElementById('confirmationModal-');
    confirmationModal?.classList.remove('show');
    confirmationModal?.setAttribute('aria-modal', 'false');
    confirmationModal?.setAttribute('style', 'display: none');
  }


  delete(poemId: any,title:any): void {
    this.deletePoem.deletePoem(poemId).subscribe(
      
      () => {
        console.log(`Tried deleting poem ${title}`);
        console.log(`Poem ${title} with ID ${poemId} deleted successfully.`);
        alert(`Se elimino el poema ${title} con id ${poemId}`)
        this.router.navigate(['']);
      },
      (error) => {
        console.log(`Tried deleting poem ${poemId}`);
        console.error(`Error deleting poem with ID ${poemId}: ${error}`);
      }
    );
  }

  deleteUserConfirmed(poemId:any,title:any): void {
    this.delete(poemId,title);
    this.closeConfirmationModal();
  }

}
