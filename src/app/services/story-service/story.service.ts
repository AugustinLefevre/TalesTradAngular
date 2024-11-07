import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { StoryClient } from '../../client/story.client';
import { Observable } from 'rxjs/internal/Observable';
import { Story } from '../../models/story.model';
import { lastValueFrom } from 'rxjs';
@Injectable({
  providedIn: 'root'
})

export class StoryService {
 
  constructor(private storyClient: StoryClient){
  }

  public async addStory(title: string, mainIdea: string) : Promise<string> {
    const userId = localStorage.getItem("userId");
 
    try {
      const resultId = await lastValueFrom(this.storyClient.addStory(title, userId, mainIdea));
      return resultId;
    } catch (error) {
      console.error("Error adding story:", error);
      throw error;
    }
  }

  public getStoriesByForCurrentUser() : Observable<Story[]>{
    const userId = localStorage.getItem("userId");
    if(userId == null){
      throw Error("user id ise null when trying to get user stories");
    }else{
      return this.storyClient.getStoriesByUserId(userId);
    }
  }

  public getStoryById(id: string) : Observable<Story>{
      return this.storyClient.getStoryById(id);
  }

  public getStories(pageIndex: number): Observable<Story[]>{
    return this.storyClient.getStories(pageIndex);
  }

}
