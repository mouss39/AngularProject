import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsApiService {

  private URL='http://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=dc420a7de9a545ac9e44eb3b4b097f2f';

  constructor(private http: HttpClient) { }

  resolveItems(): Observable<any> {
    console.log('Request is sent!');
    // this.http is a HttpClient library provide by @angular/common
    // we are calling .get() method over this.http object
    // this .get() method takes URL to call API
    return this.http.get(this.URL);
  }

}
