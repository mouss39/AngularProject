import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticatedUser } from '../models/authenticatedUser';

import { PostsService } from '../services/posts/posts.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  authUser: AuthenticatedUser;
  constructor( private postsService:  PostsService,private router: Router) { 
  }

  ngOnInit(): void {
   this.authUser=JSON.parse(localStorage.getItem("currentUser"));
   

  }
  showApi():any{
    // go to the api page to call apis
    this.router.navigate(['apiPage']);

  }

}
