import { Component, OnInit } from '@angular/core';
import { post } from '../models/post';
import { PostsService } from '../services/posts/posts.service';

@Component({
  selector: 'app-api-page',
  templateUrl: './api-page.component.html',
  styleUrls: ['./api-page.component.css']
})
export class ApiPageComponent implements OnInit {
  posts:post[];
  
  constructor(private postsService:  PostsService) { }

  ngOnInit(): void {
    //call the api to get the posts
    //get posts in the postsService
    //will return an array of posts
    this.postsService.getPosts().subscribe(posts =>{
      this.posts=posts;


    });
  }


}
