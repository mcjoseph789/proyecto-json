import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DataTablesModule } from "angular-datatables";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
/* import { DatatableComponent } from './components/datatable/datatable.component'; */
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Datatable } from './components/datatable/datatable.component'
import { MatTableModule } from '@angular/material/table'
import {MatSortModule} from '@angular/material/sort';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatPaginatorModule, MatPaginatorIntl } from '@angular/material/paginator';
@NgModule({
  declarations: [
    AppComponent,
    Datatable
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    DataTablesModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatToolbarModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
