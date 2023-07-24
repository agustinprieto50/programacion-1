import { Component, OnInit } from '@angular/core';
import { CreatePoemService } from 'src/app/services/create-poem.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-poem-form',
  templateUrl: './add-poem-form.component.html',
  styleUrls: ['./add-poem-form.component.css']
})
export class AddPoemFormComponent implements OnInit {
  title: any;
  content: any;

  constructor(private postPoem:CreatePoemService, private router: Router) { }

  ngOnInit(): void {
  }
  redirect(){
    this.router.navigateByUrl('')
  }
  onSubmit(){
    const body = {title: this.title, content: this.content, rating: 0}
    this.postPoem.postRequest(body).subscribe(response => {
      console.log(response)
      this.redirect()
      window.location.reload()
    })
  }
}
