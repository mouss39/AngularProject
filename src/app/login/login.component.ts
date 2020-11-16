import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth/auth.service';
import { Router } from '@angular/router';
import { AuthenticatedUser } from '../models/authenticatedUser';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private fb: FormBuilder,private authService: AuthService, private router: Router) { }
  loginForm: FormGroup;
  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]]
    }
    );
  }


  onSubmit(): void {
    
    this.authService.login(this.loginForm.getRawValue())
      .then(response => {
     
        var user = response.body;
        if (user.email != null) {
            console.log(user);
          localStorage.setItem("currentUser", JSON.stringify(new AuthenticatedUser(user.email, user.firstName, user.lastName)));
          this.router.navigate(['main']);
        }

      
        
  });

}
}
