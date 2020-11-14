import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthUser } from 'src/app/models/authUser';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  
  requestOptions = {
    headers: new HttpHeaders(environment.headers),
    observe: "response" as 'body',
};


  constructor(private http: HttpClient) { }

  login(authUser:AuthUser): any {
    console.log('Request is sent!');
    // this.http is a HttpClient library provide by @angular/common
    // we are calling .get() method over this.http object
    // this .get() method takes URL to call API

   
    
    var data = {
      "email": authUser.email,
      "password": authUser.password
  }
  return this.http.post(environment.loginUrl, JSON.stringify(data), { ... this.requestOptions }).toPromise();
}
 isAuthenticated(): boolean {
  var currentUser = localStorage.getItem('currentUser');
  

  if (currentUser != null) {
   return true;
  }
  else {
      return false;
  }
}

}
