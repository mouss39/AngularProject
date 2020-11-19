import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';  

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  changePassB:boolean;
  showProfileB:boolean;
  changeTelB:boolean;
  changeNameB:boolean;

  constructor() { }

  ngOnInit(): void {
  }


  //here we are going to choose which component to show based on the button clicks in the settings
  //i know it is not the perfect way to choose between components to show 
  //but this is simple and easy
  //in the next update after I finish the main things i will make it more professional  

  changePassword():void{
     this.changePassB=true;
     this.showProfileB=false;
     this.changeNameB=false;
     this.changeTelB=false;
  }
  showProfile():void{
    this.changePassB=false;
    this.showProfileB=true;
    this.changeNameB=false;
    this.changeTelB=false;
  }
  changeTel():void{
    this.changePassB=false;
    this.showProfileB=false;
    this.changeNameB=false;
    this.changeTelB=true;
  }
  changeName():void{
    this.changePassB=false;
    this.showProfileB=false;
    this.changeNameB=true;
    this.changeTelB=false;
  }

}
