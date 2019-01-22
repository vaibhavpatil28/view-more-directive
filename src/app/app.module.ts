import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ViewMoreDirective } from './view-more.directive';
import {HttpClientModule} from '@angular/common/http'

@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpClientModule ],
  declarations: [ AppComponent, HelloComponent,ViewMoreDirective ],
  bootstrap: [AppComponent],
  exports:[ViewMoreDirective]
})
export class AppModule { }
