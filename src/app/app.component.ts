import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  name = 'hi';
  showReadmore: boolean = false;
  constructor(private http: HttpClient) {
  }
  ngOnInit() {
    console.log('height equal');
    const data = {
      name: 'vaibhav',
      email: 'test@test.com'
    }
    const formData = new FormData();
    formData.append('name', 'vaibhav');
    formData.append('email', 'test@test.com');
    const url = 'http://192.168.15.160:8000/api/reg';
    const options = {
      headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
    };
    this.http.post(url, formData, options).subscribe(res => {
      console.log('res', res);
    });
  }
  showMore(show: boolean) {
    this.showReadmore = show;
    console.log(show);
  }
}
