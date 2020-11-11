import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PostsService } from '../services/posts/posts.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  @Input()
  result$: Observable<any>;

  constructor(private postsService:  PostsService) { 
    this.result$=postsService.resolveItems();
  }

  ngOnInit(): void {
  }

}
