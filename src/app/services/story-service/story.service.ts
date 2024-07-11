import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { StoryClient } from '../../client/story.client';
@Injectable({
  providedIn: 'root'
})

export class StoryService {
 
  constructor(private router: Router, private storyClient: StoryClient){
  }

  public addStory(title: string, mainIdea: string){
      const userId = localStorage.getItem("userId");
      this.storyClient.addStory(title, userId, mainIdea)
      .subscribe((data => console.log("story created with id : " + data)));
  }

}
