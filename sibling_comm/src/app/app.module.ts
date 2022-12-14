import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { AppSearchComponent } from './app-search/app-search.component';
import { AppTableComponent } from './app-table/app-table.component';

@NgModule({
  declarations: [
    AppComponent,
   
    AppSearchComponent,
        AppTableComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
