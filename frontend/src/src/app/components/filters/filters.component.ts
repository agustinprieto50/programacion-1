import { Component, OnInit } from '@angular/core';
import { GetPoemsServiceService } from 'src/app/services/get-poems-service.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent implements OnInit {
  form: FormGroup
  poems: any;
  constructor( private getPoems: GetPoemsServiceService, private formBuilder: FormBuilder) { 
    this.form = this.formBuilder.group({
      value: ['']
    })
  }

  ngOnInit(){
    this.form.get('value')?.valueChanges.subscribe((value: any)=>{
      this.getPoems.getPoemsAll(`title=${value}`).subscribe((data: any)=>{
        this.poems = data['poems']
      })
    })
    
  }

}
