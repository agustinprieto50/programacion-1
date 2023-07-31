import { Component, OnInit, OnChanges, SimpleChanges, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent  {
  @Output() params:any;
  alias: string = '';
  titulo: string = '';
  fechaMayor: string = '';
  fechaMenor: string = '';
  calMayor: string = '';
  calMenor: string = '';
  orden: string = '';
  
  constructor() { 
    
  }

  ngOnInit(){
    this.params=''
    
  }

  updateParams():void {

    this.params=''

    if (this.alias !== '') {
      this.params += '&alias=' + this.alias;

    }
    if (this.titulo !== '') {
      this.params += '&title=' + this.titulo;

    }
    if (this.fechaMayor !== '') {
      this.params += '&date[gt]=' + this.fechaMayor;

    }
    if (this.fechaMenor !== '') {
      this.params += '&date[lt]=' + this.fechaMenor;

    }
    if (this.calMayor !== '') {
      this.params += '&calification[gt]=' + this.calMayor;

    }
    if (this.calMenor!== '') {
      this.params += '&calification[lt]=' + this.calMenor;

    }

    if (this.orden !== 'none') {
      this.params += '&order_by=' + this.orden;
    }

  }

  clearForms() {
    this.alias = '';
    this.titulo = '';
    this.fechaMayor = '';
    this.fechaMenor = '';
    this.calMayor = '';
    this.calMenor = '';
    this.orden = 'none';
    this.updateParams(); // Optionally, call this if you want to update params after clearing the forms.
  }


}
