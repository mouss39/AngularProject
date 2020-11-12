import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../services/register/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private registerService: RegisterService) { }

  ngOnInit(): void {
  }


 public  register():any{
    console.log("register");
    this.registerService.register().then(response=>{

      console.log(response.body)
    })

  }
}
