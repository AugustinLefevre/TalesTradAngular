import {environment} from '../../environments/environment'
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CreateUserRequest } from './request/CreateUserRequest';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationClient {
  constructor(private http: HttpClient) {}

  public login(username: string, password: string): Observable<any> {
    return this.http.post(
      environment.apiUrl + '/user/login',
      {
        name: username,
        password: password,
      },
      { responseType: 'text' }
    );
  }

  public register(
    username: string,
    email: string,
    password: string
  ): Observable<any> {
    return this.http.post(
      environment.apiUrl + '/user',
      new CreateUserRequest(username, email, password),
      { responseType: 'text' }
    );
  }
}