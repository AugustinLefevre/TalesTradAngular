
import { WeatherClient } from '../../client/weather.client';
import { AuthenticationService } from '../../services/authentication-service/authentication.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  public weather: Observable<any> = this.weatherClient.getWeatherData();
  
  constructor(
    private authenticationService: AuthenticationService,
    private weatherClient: WeatherClient
  ) {}

  ngOnInit(): void {}

  logout(): void {
    this.authenticationService.logout();
  }
}
