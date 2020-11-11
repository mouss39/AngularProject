import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { NewsApiService } from '../services/news-api.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  @Input()
  result$: Observable<any>;

  constructor(private newsApiService:  NewsApiService) { 
    this.result$=newsApiService.resolveItems();
  }

  ngOnInit(): void {
  }

}
