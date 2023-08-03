import { Component, Output, EventEmitter, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent{
  @Output() filtersChanged = new EventEmitter<any>();
  alias: string = '';
  titulo: string = '';
  fechaMayor: string = '';
  fechaMenor: string = '';
  calMayor: string = '';
  calMenor: string = '';
  orden: string = 'none';
  

  updateParams(): void {

    const params: any = {};

    if (this.alias !== '') {
      params.alias = this.alias;
    }
    if (this.titulo !== '') {
      params.title = this.titulo;
    }
    if (this.fechaMayor !== '') {
      params['date[gt]'] = this.fechaMayor;
    }
    if (this.fechaMenor !== '') {
      params['date[lt]'] = this.fechaMenor;
    }
    if (this.calMayor !== '') {
      params['calification[gt]'] = this.calMayor;
    }
    if (this.calMenor !== '') {
      params['calification[lt]'] = this.calMenor;
    }
    if (this.orden !== 'none') {
      params.order_by = this.orden;
    }

    this.filtersChanged.emit(params);
  }

  clearForms(): void {
    this.alias = '';
    this.titulo = '';
    this.fechaMayor = '';
    this.fechaMenor = '';
    this.calMayor = '';
    this.calMenor = '';
    this.orden = 'none';
    this.updateParams();
  }
}
