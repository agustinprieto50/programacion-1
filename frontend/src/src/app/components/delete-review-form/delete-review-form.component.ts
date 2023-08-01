import { Component, OnInit, Input } from '@angular/core';
import { DeleteReviewService } from 'src/app/services/delete-review.service';

@Component({
  selector: 'app-delete-review-form',
  templateUrl: './delete-review-form.component.html',
  styleUrls: ['./delete-review-form.component.css']
})
export class DeleteReviewFormComponent implements OnInit {

  @Input() reviewId:any
  @Input() comment:any
  constructor(private deleteReviewService : DeleteReviewService) { }

  ngOnInit(): void {
  }

  openConfirmationModal(reviewId:any): void {
    const confirmationModal = document.getElementById('confirmationModal-' + reviewId);
    confirmationModal?.classList.add('show');
    confirmationModal?.setAttribute('aria-modal', 'true');
    confirmationModal?.setAttribute('style', 'display: block');
  }

  closeConfirmationModal(reviewId:any): void {
    const confirmationModal = document.getElementById('confirmationModal-' + reviewId);
    confirmationModal?.classList.remove('show');
    confirmationModal?.setAttribute('aria-modal', 'false');
    confirmationModal?.setAttribute('style', 'display: none');
  }


  deleteReview(reviewId: any): void {
    this.deleteReviewService.deleteReview(reviewId).subscribe(
      
      () => {
        console.log(`Tried deleting review ${reviewId}`);
        console.log(`Review with ID ${reviewId} deleted successfully.`);
        alert(`Se elimino la review con id ${reviewId}`)
        window.location.reload()
      },
      (error) => {
        console.log(`Tried deleting review ${reviewId}`);
        console.error(`Error deleting review with ID ${reviewId}: ${error}`);
      }
    );

}

  deleteUserConfirmed(reviewId:any): void {
    this.deleteReview(reviewId);
    this.closeConfirmationModal(reviewId);

}
}
