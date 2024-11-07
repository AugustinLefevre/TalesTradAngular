import {environment} from '../../environments/environment'
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { CreateStoryRequest } from './request/CreateStoryRequest';
import { TextProposalRequest } from './request/TextProposalRequest';

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

  public getStoriesByUserId(userId: string) : Observable<any>{
    return this.http.get(
      environment.apiUrl + '/story/user/' + userId
    );
  }

  public getStories(pageIndex: number) : Observable<any>{
    return this.http.get(
      environment.apiUrl + '/story/page/' + pageIndex
    );
  }

  public getStoryById(id: string) : Observable<any>{
    return this.http.get(
      environment.apiUrl + '/story/' + id
    );
  }

  public createTextProposal(request: TextProposalRequest) :Observable<any>{
    console.log(request);
    console.log(environment.apiUrl + '/story/text-proposal');
    return this.http.post(
      environment.apiUrl + '/story/text-proposal',
      request
    ).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {
    // Gérer l'erreur ici
    console.error('Une erreur est survenue:', error);
    return throwError('Quelque chose s\'est mal passé; veuillez réessayer plus tard.');
  }
}