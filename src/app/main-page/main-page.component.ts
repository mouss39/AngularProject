import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { post } from '../models/post';
import { user } from '../models/user';
import { PostsService } from '../services/posts/posts.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  posts:post[];
  user:string;
  constructor( private postsService:  PostsService,private router: Router) { 
  }

  ngOnInit(): void {
   
  }
  showApi():any{
    // go to the api page to call apis
    this.router.navigate(['apiPage']);

  }

}
