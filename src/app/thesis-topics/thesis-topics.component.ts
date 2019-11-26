import { Component, OnInit } from '@angular/core';
import { TopicsService } from '../topics.service';

@Component({
  selector: 'app-thesis-topics',
  templateUrl: './thesis-topics.component.html',
  styleUrls: ['./thesis-topics.component.css']
})
export class ThesisTopicsComponent implements OnInit {

  constructor(private topicsService: TopicsService) { }

  ngOnInit() {
  }

}
