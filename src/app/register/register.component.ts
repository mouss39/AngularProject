import { identifierModuleUrl } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { user } from '../models/user';
import { RegisterService } from '../services/register/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private fb: FormBuilder,private registerService: RegisterService, private router: Router) {
    this.handleError = this.handleError.bind(this);
   }
  registrationForm: FormGroup;
  regUser: user;
  errorMessage = "";
  ngOnInit(): void {

    this.registrationForm = this.fb.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
      confPassword: ['', [Validators.required]],
      telNumber: ['', [Validators.required]],
      age: ['', [Validators.required]],
      sex: ['', [Validators.required]],
    }
    );
  }

  private handleError(error: any): Promise<any> {
    
    //TODO: conflict error message
    switch (error.status) {
      case 200:;
      case 409: console.log("Conflict ");break;
    }
    return Promise.resolve(error.message || error);
  }

 public  register():any{
   //this function will be called once the user clicks the register button

   // get all the values
   this.regUser=  this.registrationForm.getRawValue();

   // check if they meet the conditions 
    if(this.regUser.password==""
     || this.regUser.confPassword==""
     || this.regUser.firstName==""
     || this.regUser.lastName==""
     || this.regUser.age==0
     || this.regUser.telNumber==""
     || this.regUser.email==""
    ){
    //TODO: notify about something empty
    }
    else if(this.regUser.password!=this.regUser.confPassword){
      //I just did one of the conditions for simplicity but lot others can be added 
      //here u can add all the conditions you need 
      
      //TODO: notify about the wrong pass
    }else{
     //send them to the registration service in order to be stored in the database
     console.log(this.regUser)
      this.registerService.register(this.regUser).then(response=>{
        this.router.navigate(['main']);
      }).catch(this.handleError);
    }
   
     

  }
}
