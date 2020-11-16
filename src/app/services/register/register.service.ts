import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { user } from 'src/app/models/user';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  
  requestOptions = {
    headers: new HttpHeaders(environment.headers),
    observe: "response" as 'body',
};


  constructor(private http: HttpClient) { }

  
  register(regUser: user): any {

    
    console.log('Request is sent!register');
    // this.http is a HttpClient library provide by @angular/common
    // we are calling .get() method over this.http object
    // this .get() method takes URL to call API
    var dataTrail={

      "firstName":"tryit",
      "lastName":"last",
      "email":"moh1245@hotmail.com",
      "password":"222",
      "age":1,
      "sex":"m",
      "telNumber":"33333",
    }
   
    return this.http.post(environment.addUSerUrl, JSON.stringify(regUser), { ... this.requestOptions }).toPromise();

  }
}
