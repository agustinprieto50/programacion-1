import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-crud-filters',
  templateUrl: './crud-filters.component.html',
  styleUrls: ['./crud-filters.component.css']
})
export class CrudFiltersComponent  {
  @Output() filtersChanged = new EventEmitter<any>();
  alias: string = ''
  poemas: string = ''
  reviews: string = ''
  orden: string = 'none'

  updateParams():void {

    const params: any = {};
    
    if (this.alias !== '') {
      params.alias = this.alias;

    }

    if (this.poemas !== '') {
      params['poem_count'] = this.poemas;
    }

    if (this.reviews !== '') {
      params['review_count'] = this.reviews;
    }

    if (this.orden !== 'none') {
      params.order_by = this.orden;
    }

    this.filtersChanged.emit(params);
  }

  clearForms() {
    this.alias = '';
    this.poemas = '';
    this.reviews = '';
    this.orden = 'none';
    this.updateParams(); // Optionally, call this if you want to update params after clearing the forms.
  }

 

}
