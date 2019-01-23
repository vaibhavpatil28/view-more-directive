import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ViewMoreDirective } from './view-more.directive';

@NgModule({
  imports:[],
  declarations: [ AppComponent,ViewMoreDirective ],
  bootstrap: [AppComponent],
  exports:[ViewMoreDirective]
})
export class AppModule { }
