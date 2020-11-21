import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { user } from 'src/app/models/user';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UpdateValuesService {
  requestOptions = {
    headers: new HttpHeaders(environment.headers),
    observe: "response" as 'body',
};


  constructor(private http: HttpClient) { }

  
  updateTelNumber(regUser: user): any {
   //here were we call the backend in order to add a user into the database through and api call
   //the user is passed by the method

    return this.http.post(environment.updateTelNumber, JSON.stringify(regUser), { ... this.requestOptions }).toPromise();

  }
}
