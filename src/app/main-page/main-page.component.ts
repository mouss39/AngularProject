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
  constructor(private activatedRoute: ActivatedRoute, private postsService:  PostsService,private router: Router) { 
  }

  ngOnInit(): void {
    this.postsService.getPosts().subscribe(posts =>{
      this.posts=posts;

    });
   
    //check this for passing values
    this.activatedRoute.params.subscribe(params => {
      this.user = params['email']; 
      console.log(user);
    });


  
   
    
  }
  showApi():any{
    this.router.navigate(['apiPage']);

  }

}
