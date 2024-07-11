import {environment} from '../../environments/environment'
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CreateStoryRequest } from './request/CreateStoryRequest';

@Injectable({
  providedIn: 'root',
})
export class StoryClient {
  constructor(private http: HttpClient) {}

  public addStory(title: string, userId: string | null, mainIdea: string | null): Observable<string> {
    return this.http.post(
      environment.apiUrl + '/story',
      new CreateStoryRequest(title, userId, mainIdea),
      { responseType: 'text' }
    );
  }
}