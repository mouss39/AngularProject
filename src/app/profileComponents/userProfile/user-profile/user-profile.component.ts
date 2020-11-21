import { Component, OnInit } from '@angular/core';
import { AuthenticatedUser } from 'src/app/models/authenticatedUser';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  currentUser:AuthenticatedUser;
  constructor() { }

  ngOnInit(): void {
    //this will get info of the current user
    this.currentUser=JSON.parse(localStorage.getItem("currentUser"));
   
   
  }

}
