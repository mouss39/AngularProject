import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { post } from '../models/post';
import { PostsService } from '../services/posts/posts.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  posts:post[];

  constructor(private postsService:  PostsService) { 
  }

  ngOnInit(): void {

    this.postsService.getPosts().subscribe(posts =>{
      this.posts=posts;

    });
       // this.result$=postsService.getPosts();
  }

}
