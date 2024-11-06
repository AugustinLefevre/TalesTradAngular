import { Component, OnInit } from '@angular/core';
import { StoryService } from '../../services/story-service/story.service';
import {Story} from '../../models/story.model';


@Component({
  selector: 'app-my-stories',
  templateUrl: './my-stories.component.html',
  styleUrl: './my-stories.component.css'
})
export class MyStoriesComponent  implements OnInit {
  constructor(private storyService: StoryService){}

  stories: Story[] = [];

  ngOnInit(): void {
    this.storyService.getStoriesByForCurrentUser().subscribe(datas =>{
      this.stories.push(...datas); 
    });
  }
}
