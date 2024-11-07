import { Component, OnInit } from '@angular/core';
import { StoryService } from '../../services/story-service/story.service';
import {Story} from '../../models/story.model';
import { Router } from '@angular/router';


@Component({
  selector: 'app-my-stories',
  templateUrl: './my-stories.component.html',
  styleUrl: './my-stories.component.css'
})
export class MyStoriesComponent  implements OnInit {
  constructor(private storyService: StoryService, private router: Router) {}

  stories: Story[] = [];

  ngOnInit(): void {
    this.storyService.getStoriesByForCurrentUser().subscribe(datas =>{
      this.stories.push(...datas); 
    });
  }

  viewStory(id: string): void {
    this.router.navigate(['/view-story', id]);
  }
}
