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
   //here were we call the backend in order to add a user into the database through and api call
   //the user is passed by the method

    return this.http.post(environment.addUSerUrl, JSON.stringify(regUser), { ... this.requestOptions }).toPromise();

  }
}
