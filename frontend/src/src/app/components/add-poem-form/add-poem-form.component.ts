import { Component, OnInit } from '@angular/core';
import { CreatePoemService } from 'src/app/services/create-poem.service';

@Component({
  selector: 'app-add-poem-form',
  templateUrl: './add-poem-form.component.html',
  styleUrls: ['./add-poem-form.component.css']
})
export class AddPoemFormComponent implements OnInit {
  title: any;
  content: any;

  constructor(private postPoem:CreatePoemService) { }

  ngOnInit(): void {
  }
  onSubmit(){
    const body = {title: this.title, content: this.content}
    this.postPoem.postRequest(body).subscribe(response => {
      console.log(response)
    })
  }
}
