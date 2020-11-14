import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { user } from '../models/user';
import { RegisterService } from '../services/register/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private fb: FormBuilder,private registerService: RegisterService) { }
  registrationForm: FormGroup;
  regUser: user;
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


 public  register():any{
    console.log("register");
//TODO: fix the value issue by adding labels
//TODO: add conditions for the input values
  this.regUser=  this.registrationForm.getRawValue();
      console.log(this.regUser.firstName)
    // this.registerService.register().then(response=>{

    //   console.log(response.body)
    // })

  }
}
