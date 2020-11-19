import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth/auth.service';
import { Router } from '@angular/router';
import { AuthenticatedUser } from '../models/authenticatedUser';
import {MatDialog} from '@angular/material/dialog';
import { DialogComponent } from '../components/dialog/dialog.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private fb: FormBuilder,
    private authService: AuthService,
     private router: Router,
     public dialog: MatDialog) { 
      this.handleError = this.handleError.bind(this);
     }


  loginForm: FormGroup;


  ngOnInit(): void {
    //login form to get the values in the login
    this.loginForm = this.fb.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]]
    }
    );
  }

  private handleError(error: any): Promise<any> {
    
    //in case it returned 409 then there is already an existing email.
    switch (error.status) {
      case 200:;
      case 401: this.dialog.open(DialogComponent,{data: {dataType:"wrongEmailOrPass"}}); break;
    }
    return Promise.resolve(error.message || error);
  }


  onSubmit(): void {
    //login function will be called when the login button is pressed

    //get the values and send it to the authService in order to send it to the backend
    this.authService.login(this.loginForm.getRawValue())
      .then(response => {
        //the response from the back end
        //contains the user if it is authenticated
        var user = response.body;
        if (user.email != null) {
          //save the user into the local storage in order to be used later in the pages
          localStorage.setItem("currentUser", JSON.stringify(
            new AuthenticatedUser(user.email, user.firstName, user.lastName,user.telNumber,user.age)));
          this.router.navigate(['main']);
        }
      
        
  }).catch(this.handleError);

}
}
