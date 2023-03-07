import { HttpClient } from '@angular/common/http';
import { Component, ViewChild } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';
import { CellClickedEvent, ColDef, GridReadyEvent } from 'ag-grid-community';
import { Observable } from 'rxjs';

export interface ExcelData {
  make: string;
  model: string;
  price: string;
}

@Component({
 selector: 'app-root',
 templateUrl: './app.component.html',
 styleUrls: ['./app.component.scss']
})
export class AppComponent {

  showForm: boolean = false;

  makeControl: string = "";
  modelControl: string = "";
  priceControl: number = 0;

 // Each Column Definition results in one Column.
 public columnDefs: ColDef[] = [
   { field: 'make', rowDrag: true, checkboxSelection: true, headerCheckboxSelection: true},
   { field: 'model'},
   { field: 'price' }
 ];

 // DefaultColDef sets props common to all Columns
 public defaultColDef: ColDef = {
   sortable: true,
   filter: true,
 };

 rowData = [
  { make: 'Toyota', model: 'Celica', price: 35000 },
  { make: 'Ford', model: 'Mondeo', price: 32000 },
  { make: 'Porsche', model: 'Boxter', price: 72000 },
  { make: 'Toyota', model: 'Celica', price: 35000 },
  { make: 'Ford', model: 'Mondeo', price: 32000 },
  { make: 'Porsche', model: 'Boxter', price: 72000 },
  { make: 'Toyota', model: 'Celica', price: 35000 },
  { make: 'Ford', model: 'Mondeo', price: 32000 },
  { make: 'Porsche', model: 'Boxter', price: 72000 },
  { make: 'Toyota', model: 'Celica', price: 35000 },
  { make: 'Ford', model: 'Mondeo', price: 32000 },
  { make: 'Porsche', model: 'Boxter', price: 72000 }
];
 
 // Data that gets displayed in the grid
 public rowData$!: Observable<any[]>;

 // For accessing the Grid's API
 @ViewChild(AgGridAngular) agGrid!: AgGridAngular;

 constructor(private http: HttpClient) {}

 // Example load data from sever
 onGridReady(params: GridReadyEvent) {
  //  this.rowData$ = this.http
  //    .get<any[]>('https://www.ag-grid.com/example-assets/row-data.json');
 }

 // Example of consuming Grid Event
 onCellClicked( e: CellClickedEvent): void {
   console.log('cellClicked', e);
 }

 // Example using Grid's API
 clearSelection(): void {
   this.agGrid.api.deselectAll();
 }

 resetData(): void {
  this.makeControl = "";
  this.modelControl = "";
  this.priceControl = 0;
 }

 enableForm() {
  this.showForm = true;
  this.resetData();
 }

 addRow() {
    this.rowData.push({ make: this.makeControl, model: this.modelControl, price: this.priceControl });
    this.agGrid.api.setRowData(this.rowData);
    this.resetData();
    this.showForm = false;
 }

}