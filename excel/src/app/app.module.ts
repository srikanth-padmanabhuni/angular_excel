import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { SpreadsheetAllModule } from '@syncfusion/ej2-angular-spreadsheet';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SpreadsheetAllModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
