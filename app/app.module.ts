import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from './material.module'
import { HttpModule } from '@angular/http'

import { AppComponent } from './app.component';
import { ExampleOneComponent } from './example1.component';

import { DataService } from './data.service'

@NgModule({
  imports:      [ BrowserModule, FormsModule, MaterialModule, HttpModule ],
  declarations: [ AppComponent, ExampleOneComponent ],
  providers:    [ DataService ],  
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
