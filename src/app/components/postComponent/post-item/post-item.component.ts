import { Component, OnInit, Input, EventEmitter} from '@angular/core';
import { post } from 'src/app/models/post';


@Component({
  selector: 'app-post-item',
  templateUrl: './post-item.component.html',
  styleUrls: ['./post-item.component.css']
})
export class PostItemComponent implements OnInit {
  @Input() post: post;
  //this component is for the posts that are returned 
  // each one of them will be showed in a single one 
  constructor() { }

  ngOnInit(): void {
  }

}
