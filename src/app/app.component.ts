import { Component, OnInit } from '@angular/core';
import {Http,Response} from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  private url ='http://localhost:8080/fsapi';
  data: any;

  constructor(private http: Http) {
  }

  ngOnInit() {
  }

  makeRequest(): void {
    this.http.get(this.url)
    .subscribe((res: Response) => {
      this.data = res.json();
    });
  }

}
