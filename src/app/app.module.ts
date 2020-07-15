import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponentModule } from './hello.component';

import { DxTreeViewModule } from "devextreme-angular";

@NgModule({
  imports:      [ BrowserModule, FormsModule, HelloComponentModule,DxTreeViewModule ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }