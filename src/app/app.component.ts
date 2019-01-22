import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'hi';
  showReadmore:boolean = false;
  ngInit(){
    console.log('height equal');
  }
  showMore(show:boolean){
    this.showReadmore = show;
    console.log(show);
  }
}
