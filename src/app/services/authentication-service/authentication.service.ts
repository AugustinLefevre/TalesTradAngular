
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationClient } from '../../client/authentication.client';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  private tokenKey = 'token';
  private userIdKey = 'userId';
  private userNameKey = 'userName';

  constructor(
    private authenticationClient: AuthenticationClient,
    private router: Router
  ) {}

  private saveJSON(data: string){
    JSON.parse(data, (key, value) => {
      if (typeof value === 'string') {
        localStorage.setItem(key, value);
      }
    });
  }

  public login(username: string, password: string): void {
    this.authenticationClient.login(username, password).subscribe((data) => {
      if (typeof localStorage !== 'undefined') {
        this.saveJSON(data);
        this.router.navigate(['/']);
      }
    });
  }

  public register(username: string, email: string, password: string): void {
    this.authenticationClient
      .register(username, email, password)
      .subscribe((data) => {
        if (typeof localStorage !== 'undefined') {
          this.saveJSON(data);
          this.router.navigate(['/']);
        }
      });
  }

  public logout() {
    if (typeof localStorage !== 'undefined') {
      localStorage.removeItem(this.tokenKey);
    }
    this.router.navigate(['/login']);
  }

  public isLoggedIn(): boolean {
    if (typeof localStorage !== 'undefined') {
      let token = localStorage.getItem(this.tokenKey);
      return token != null && token.length > 0;
    }
    return false;
  }

  public getToken(): string | null {
    if (typeof localStorage !== 'undefined') {
      return this.isLoggedIn() ? localStorage.getItem(this.tokenKey) : null;
    }
    return null;
  }
}
