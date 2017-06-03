import { Component, OnInit } from '@angular/core';

import { WeatherService } from '../../weather/weather.service';
import { IWeather, IOWeather} from '../../weather/models/weather.interface';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  weather: IOWeather;
  forecast: any;
  date: Date;
  searchTerm: string;
  cityName = 'Paris';

  constructor(private weatherService: WeatherService) { }

  ngOnInit() {
    this.date = new Date();
    this.getWeatherByCity(this.cityName);
    this.getForecastByCity(this.cityName);
  }

  getWeatherByCity(city: string) {
    this.weatherService.getWeatherByCity(city)
        .subscribe((response: IOWeather) => {
          this.weather = response;
        },
        (err: any) => console.log(err),
        () => console.log('getWeatherByCity() retrieved for city: ' + city));
  }

  getForecastByCity(city: string) {
    this.weatherService.getForecastByCity(city)
        .subscribe((response: any) => {
          this.forecast = response;
        },
        (err: any) => console.log(err),
        () => console.log('getForecastByCity() retrieved for city: ' + city));
  }

  search(data: string): void {
    let term = data;
    if (!data && data.length < 3) {
      term = this.cityName;
    }

    this.getWeatherByCity(term);
    this.getForecastByCity(term);
  }
}
