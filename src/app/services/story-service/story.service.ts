import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { StoryClient } from '../../client/story.client';
import { Observable } from 'rxjs/internal/Observable';
import { Story } from '../../models/story.model';
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

  public getStoriesByForCurrentUser() : Observable<Story[]>{
    const userId = localStorage.getItem("userId");
    if(userId == null){
      throw Error("user id ise null when trying to get user stories");
    }else{
      return this.storyClient.getStoriesByUserId(userId);
    }
  }

  public getStories(pageIndex: number): Observable<Story[]>{
    return this.storyClient.getStories(pageIndex);
  }

}
